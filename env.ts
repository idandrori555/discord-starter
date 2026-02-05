const BOT_TOKEN = Bun.env.BOT_TOKEN!;
if (!BOT_TOKEN) throw new Error("BOT_TOKEN is not set");

export { BOT_TOKEN };
