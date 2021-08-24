const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "pt-br":
                region = 'pt-brazil';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setAuthor(` • ${message.guild.name}`, message.guild.iconURL({dynamic : true, format: "png" }))
            .setThumbnail(message.guild.iconURL({dynamic : true, format: "png" }))
            .setColor('#FF0000')
            .setTitle(`Informações do servidor:`)
            .addFields(
                {
                    name: "<:redowner:872617636305981522> |  Dono: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "<a:members:874476233973465170> | Membros: ",
                    value: `Temos ${message.guild.memberCount} Membros!`,
                    inline: true
                },
                {
                    name: "<:IconOnline:868292298625155142> | Membros Online: ",
                    value: `Temos ${message.guild.members.cache.filter(m => m.user.presence.status === `online`).size} membros online!`,
                    inline: true
                },
                {
                    name: "<:IconIdle:868292216974639194> | Membros Ausentes: ",
                    value: `Temos ${message.guild.members.cache.filter(m => m.user.presence.status === `idle`).size} membros online!`,
                    inline: true
                },
                {
                    name: "<:IconDnd:868292170346541106> | Membros Ocupados: ",
                    value: `Temos ${message.guild.members.cache.filter(m => m.user.presence.status === `dnd`).size} membros online!`,
                    inline: true
                },
                {
                    name: "<:IconOffline:868292257470627890> | Membros Offline: ",
                    value: `Temos ${message.guild.members.cache.filter(m => m.user.presence.status === `offline`).size} membros online!`,
                    inline: true
                },
                {
                    name: "<:BotBadge:868974591584927775> | Total de Bots: ",
                    value: `Temos aqui ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "<:reddate:872620946471657492> | Data de criação: ",
                    value: message.guild.createdAt.toLocaleDateString("pt-BR"),
                    inline: true
                },
                {
                    name: "<:redflag:872620873335595078> | Roles: ",
                    value: `Tem o total de ${message.guild.roles.cache.size} roles neste servidor.`,
                    inline: true,
                },
                {
                    name: `🗺 | Região: `,
                    value: region,
                    inline: true
                },
                {
                    name: `<a:v_certo:873027591521570836> | Verificação: `,
                    value: message.guild.verified ? 'Servidor é Verificado' : `Servidor não é verificado`,
                    inline: true
                },
                {
                    name: '<a:slattbooster:875413814911316038> | Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Temos aqui ${message.guild.premiumSubscriptionCount} Boosters` : `não há boosters`,
                    inline: true
                },
                {
                    name: "<:emojisuave:842507482873987122> | Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Temos ${message.guild.emojis.cache.size} emojis!` : 'não há emojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}