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


client.on('interactionCreate', async (interaction) => {
    try {

        await interaction.deferReply({ ephemeral: true })

        const role = interaction.guild.roles.cache.get(interaction.customId)

        if (!role) {
            interaction.editReply({
                content: "I Couldn't Find That Role",

            })
            return;
        }

        const hasRole = await interaction.member.roles.cache.has(role.id)

        if (hasRole) {
            await interaction.member.roles.remove(role.id)
            await interaction.editReply(`The Role ${role} has been Removed`)
            return;
        }

        await interaction.member.roles.add(role)
        await interaction.editReply(`The Role ${role} has been Added`)
    } catch (error) {
        console.log(error)
    }
})


client.login(process.env.TOKEN);