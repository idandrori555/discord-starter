import { Client, Events, GatewayIntentBits } from "discord.js";
import { BOT_TOKEN } from "./env";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent, // Optional
  ],
});

client.on(Events.ClientReady, () => {
  console.log(`Connected as ${client.user?.tag} ✓`);
});

client.login(BOT_TOKEN);
