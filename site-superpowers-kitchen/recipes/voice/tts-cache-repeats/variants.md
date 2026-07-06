# Variants — Tts Cache Repeats

- **Model swap:** change the model id in `functions.ts` (see `models.json`).
- **Cost cap:** wrap the handler with a monthly usage guard (`backend/rate-limit-user`).
- **Streaming toggle:** set `stream: false` for one-shot JSON.
- **Persona:** edit the system prompt at the top of the handler.
- **Locale:** pass `lang` in the request body; the handler forwards it to the system prompt.
