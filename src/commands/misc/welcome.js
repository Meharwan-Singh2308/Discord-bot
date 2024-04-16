const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'welcome',
    description: 'Generate Welcome and Guidance Message to Play Quiz',
    callback: async (client, interaction) => {
        const { EmbedBuilder } = require('discord.js');

        const welcomeEmbed = new EmbedBuilder()
            .setTitle('⭐ Welcome to KBC of Programming!')
            .setDescription('Test your knowledge and Learn Something New about Programming , Java and Data Structures and Algorithms!')
            .setColor(0x3498db) // Adjust color as desired
            .addFields(
                { name: '🌟 How to Play', value: `Use the **/quiz** command to start a random quiz.`, inline: false },
                { name: '🌟 Answering Questions', value: `Type the number corresponding to your chosen answer. (e.g., type "1" for the first answer)`, inline: false },
                { name: '🌟 Add your own questions', value: `If you wants to add your own questions DM or Ping @manager or @Mehar `, inline: false },
                { name: '🌟 Feedback', value: `This bot is Under Development and if you wants to add any feature or you suspect any but or error , Please Tell the @Managers or @Mehar`, inline: false }
            )
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jHngcPWCZ4i22qvzpr5ppdz0FwVARnqH0g') 
            .setFooter({ text: 'Developed by Mehar', iconURL: 'https://cdn.discordapp.com/attachments/1195742032988209192/1218224396305698916/M.png?ex=6606e2e1&is=65f46de1&hm=a96821e4f83a2d9bbf0b9c1e414b045ccb569dd577babbea36a4231bf0a5dec3&' }); 

                interaction.reply({ embeds: [welcomeEmbed] });
    }

}