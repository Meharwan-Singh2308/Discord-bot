const { EmbedBuilder } = require('discord.js');
const {testChannelId} = require('../../../config.json')
module.exports = {
    name: 'rules',
    description: 'Replies with the rules of the server',
    callback: (client, interaction) => {


        const embed = new EmbedBuilder()
            .setAuthor({name:"DSA",iconURL:'https://wallpapercave.com/wp/wp9165322.png'})
            .setTitle('Server Rules')
            .setColor(0x3498db) // Adjust color code for your preference (e.g., blue)
            .setDescription('Please take a moment to read and understand our server rules to ensure a smooth and enjoyable experience for everyone.')
            .addFields(
                { name: '⭐ **Respect Everyone**', value: '  -Be kind and considerate to all members, regardless of background or beliefs.' },
                { name: '⭐ **No NSFW Content**', value: '  -This server is not for sharing explicit content of any kind.' },
                { name: '⭐ **No Spam or Self-Promotion**', value: '  -Avoid excessive posting, unsolicited links, or self-promotion.' },
                { name: '⭐ **Stay on Topic**', value: '  -Keep discussions relevant to the designated channels.' },
            )
            .setFooter({ text: 'By joining this server, you agree to these rules.' });

        // Send the embed in the desired channel (replace with your channel ID)
        client.channels.cache.get('1217851598798061608').send({ embeds: [embed] });
    }
}