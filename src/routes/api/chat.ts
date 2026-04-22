import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are the friendly AI assistant for Pool Specialists Marbella, a pool installation, upgrade, repair and maintenance company on the Costa del Sol with 25+ years of experience.

Service areas: Marbella, Estepona, San Pedro, Benahavís, Nueva Andalucía.

Services offered:
- Pool heating systems (heat pumps, etc.)
- Salt chlorination systems
- UV disinfection systems
- Automatic dosing (pH & chlorine)
- Pump & motor replacement
- Filters & filtration systems
- Pool LED lighting
- Fixtures & fittings (showers, handrails, ladders)
- Community & private pool servicing

Tone: helpful, concise, professional but warm. Use markdown for clarity (lists, bold).
Always encourage users to call (✆ +34 600 000 000) or WhatsApp for a personalised quote.
If asked something off-topic, politely steer back to pool topics.
Never invent prices — always say a quick site assessment is needed.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as {
            messages: { role: "user" | "assistant"; content: string }[];
          };

          if (!Array.isArray(messages) || messages.length === 0) {
            return Response.json({ error: "messages required" }, { status: 400 });
          }

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return Response.json({ error: "AI not configured" }, { status: 500 });
          }

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash",
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.slice(-20),
              ],
            }),
          });

          if (!res.ok) {
            if (res.status === 429) {
              return Response.json(
                { error: "Too many requests, please try again in a moment." },
                { status: 429 }
              );
            }
            if (res.status === 402) {
              return Response.json(
                { error: "AI credits exhausted. Please add funds to continue." },
                { status: 402 }
              );
            }
            return Response.json({ error: "AI request failed" }, { status: 500 });
          }

          const data = await res.json();
          const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a reply.";
          return Response.json({ reply });
        } catch (err) {
          console.error("chat error", err);
          return Response.json({ error: "Unexpected error" }, { status: 500 });
        }
      },
    },
  },
});
