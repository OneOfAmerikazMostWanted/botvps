const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "botinfo",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle("<a:setavermelha:873020922636959774> Minhas informações:")
            .setColor("#FF0000")
            .setDescription("Olá eu sou o slatt, BOT mais slimelife que existe nesse mundo <:oww_yee_homie:867832964393730059>\n Se quiser ver a lista dos meus comandos `s?help`, ta aí.  ")
            .addFields(
                {
                    name: '<:rednetwork:872617568656052274>・Servidores:',
                    value: `<a:setavermelha:873020922636959774> Em ${client.guilds.cache.size} servidores.`,
                    inline: false
                },
                {
                    name: '<:rednotes:872620888376373318>・Canais:',
                    value: `<a:setavermelha:873020922636959774> Em ${client.channels.cache.size} canais.`,
                    inline: false
                },
                {
                    name: '<:redcommat:872620899705176074>・Usuários:',
                    value: `<a:setavermelha:873020922636959774> Total de ${client.users.cache.size} usuários.`,
                    inline: false
                },
                {
                    name: '⏳・Ping:',
                    value: `<a:setavermelha:873020922636959774> ${Math.round(client.ws.ping)}ms de ping.`,
                    inline: false
                },
                {
                    name: '📖・Data de Entrada:',
                    value: '<a:setavermelha:873020922636959774> ' + client.user.createdAt,
                    inline: false
                },
                {
                    name: '📓・Informação Do servidor:',
                    value: `<a:setavermelha:873020922636959774> ・Cores: ${os.cpus().length}.`,
                    inline: false
                }
            )
            .setFooter(`Solicitado por: ${message.author.tag}.`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}