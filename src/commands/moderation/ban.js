const { Client, interaction, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {

    /**
     * 
     * @param {Client} client; 
     * @param {interaction} interaction; 
     * @returns 
     */

    callback: async (client, interaction) => {
        const targetUserId = interaction.options.get('target-user').value;
        const reason = interaction.options.get('reason')?.value || 'No reason provided';;

        await interaction.deferReply();

        const targetUser = await interaction.guild.members.fetch(targetUserId);

        if (!targetUser) {
            await interaction.editReply('That user Does not Exists in this server')
            return;
        }


        if (targetUser.id === interaction.guild.ownerId) {
            await interaction.editReply('You cannot ban the owner of the server')
            return;
        }

        const targetUserRolePostion = targetUser.roles.highest.position;//highest role of the target user
        const requestUserRolePosition = interaction.member.roles.highest.position;//highest role of the user who requested the ban
        const botRolePosition = interaction.guild.members.me.roles.highest.position;//highest role of the bot

        if (targetUserRolePostion >= requestUserRolePosition) {
            await interaction.editReply('You cannot ban a member with a higher/equal role than you')
            return;
        }

        if(targetUserRolePostion >= botRolePosition) {
            await interaction.editReply('I cannot ban a member with a higher/equal role than me')
            return;
        }

        try {
            await targetUser.ban({ reason: reason })
            await interaction.editReply(`${targetUser} has been banned from the server \n Reason: ${reason}`)

        } catch (error) {
            console.log("There was an error while trying to ban the user" + error)
        }


    },
    name: 'ban',
    description: 'bans a member from the server',
    options: [
        {
            name: 'target-user',
            description: 'the user to ban',
            required: true,
            type: ApplicationCommandOptionType.Mentionable
        },
        {
            name: 'reason',
            description: 'the reason to ban',
            type: ApplicationCommandOptionType.String
        }
    ],
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],
}