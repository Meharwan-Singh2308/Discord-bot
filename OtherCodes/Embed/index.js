require('dotenv').config();
const { Client, EmbedBuilder, GatewayIntentBits, IntegrationApplication } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ]
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('interactionCreate', interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
            .setTitle('Embed')
            .setDescription('This is an Embed Description')
            .setColor('Random')
            .setFields(
{ name: 'Field Name', value: 'Field Value', inline: true },
{ name: 'Field Name 2', value: 'Field Value 2', inline: true },
{ name: 'Field Name 3', value: 'Field Value 3', inline: true },

)
                .setAuthor({name:'Meharwan Singh',iconURL:'https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc='})
                .setImage('https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=')

        interaction.reply({ embeds: [embed] })
    }




})

client.on('messageCreate', async message => {

    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});


client.login(process.env.TOKEN);