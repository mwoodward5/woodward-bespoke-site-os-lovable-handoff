# COST GUIDE

Tiers (per recipe README):

- **free** — no external API cost.
- **cheap** — <$0.001 per invocation on default model.
- **moderate** — $0.001–$0.02 per invocation.
- **expensive** — >$0.02 per invocation OR bursts large token windows.

Reduce cost with:
1. Cheaper model — see `tokens/models.json`.
2. Prompt cache / result cache for repeated inputs.
3. Streaming + early-cancel on the client.
4. Per-user daily caps in `tokens/rate-limits.json`.
