require('dotenv').config();
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ]
});


const roles = [
    {
        id: '1216708621719699506',
        label: 'Red'
    },
    {
        id: '1216708800225214504',
        label: 'Green'
    },
    {
        id: '1216708839106281482',
        label: 'Blue'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1195742032988209192')

        if (!channel) return;

        const row = new ActionRowBuilder()

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label)
                    .setStyle(ButtonStyle.Primary)
            )
        })

        await channel.send({
            content:'Add or Remove a Role from your ID',
            components:[row],
        })

        process.exit();
    } catch (error) {
        console.log(error);
    }
});



client.login(process.env.TOKEN);