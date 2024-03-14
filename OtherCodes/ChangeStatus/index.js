require('dotenv').config();
const { Client, ActivityType, GatewayIntentBits, IntegrationApplication, Application } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ]
});


const status = [
    {
        name: "Don't under Control",
        type: ActivityType.Streaming,
        url: "https://www.youtube.com/watch?v=OqxHy8sCtvA&list=PLpmb-7WxPhe0ZVpH9pxT5MtC4heqej8Es&index=6"
    },
    {
        name: "Doing Coding",
    },
    {
        name: "Don't Disturb ME",
    },
    {
        name: "Bss bajna chahiye gaana",
        type: ActivityType.Listening
    },
]

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // setInterval(() => {
    //     let random = Math.floor(Math.random() * status.length);

    //     client.user.setActivity(status[random])
    // }, 10000);
});




client.login(process.env.TOKEN);