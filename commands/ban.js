const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        message.delete()
        if (!message.member.hasPermission('BAN_MEMBERS')) {
        var embed = new MessageEmbed()
        .setAuthor(`${client.user.username}`)
        .setTitle('Erro')
        .setColor('#FF0000')
        .setThumbnail('https://media.discordapp.net/attachments/863290821179736064/868303443490635806/847531194795032676.png')
        .setDescription('Erro ao banir este usuário pois você não tem tal permissão.')
            return message.channel.send(embed).then(async msg => {
                setTimeout(async() => {
                msg.delete()
                }, 5000)
                })

        }
        if (!args[0]) {
            var embed = new MessageEmbed()
            .setAuthor(`${client.user.username}`)
            .setTitle('Erro')
            .setColor('#FF0000')
            .setThumbnail('https://media.discordapp.net/attachments/863290821179736064/868303443490635806/847531194795032676.png')
            .setDescription('Erro ao banir este usuário pois você não o mencionou.')

            return message.channel.send(embed).then(async msg => {
                setTimeout(async() => {
                msg.delete()
                }, 5000)
                })

        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            var embed = new MessageEmbed()
            .setAuthor(`${client.user.username}`)
            .setTitle('<:StaffSlatt:868974591928832061> Usuário Banido')
            .setColor('#FF0000')
            .setThumbnail('https://cdn.discordapp.com/emojis/616026018771107853.png?v=1')
            .setDescription(`o Usuário foi banido com sucesso.\n Autor do banimento: ${message.author.username}.\nUsuário Banido: ${member}`)
            await message.channel.send(embed).then(async msg => {
                setTimeout(async() => {
                msg.delete()
                }, 5000)
                })

        } catch (e) {
            var embed = new MessageEmbed()
            .setAuthor(`${client.user.username}`)
            .setTitle('Erro')
            .setColor('#FF0000')
            .setThumbnail('https://media.discordapp.net/attachments/863290821179736064/868303443490635806/847531194795032676.png')
            .setDescription('Eu não encontrei este usuário no servidor')
            return message.channel.send(embed).then(async msg => {
                setTimeout(async() => {
                msg.delete()
                }, 5000)
                })
            
        }

        message.delete({ timeout: 5000 })
    }
}