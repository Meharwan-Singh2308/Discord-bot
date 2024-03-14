require('dotenv').config();
const { Client, EmbedBuilder, GatewayIntentBits, IntegrationApplication } = require('discord.js');
const eventHandlers = require('./handlers/eventHandlers');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ]
});



eventHandlers(client);


client.login(process.env.TOKEN);