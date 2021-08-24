const Discord = require("discord.js");
const Report = require("../models/report.js")
const mongoose = require("mongoose");
const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args ) => {
    await message.delete();
    if (message.author.id != '852657346676392056') return;
    mongoose.connect('mongodb://localhost/Reports');
    let rUser = message.mentions.members.first()
    if (!rUser) return message.reply("Não consegui encontrar este usuário.");
    let rreason = args.slice(1).join(" ");
    if (!rreason) message.reply("Por favor escreva alguma razão.");


    let reportEmbed = new MessageEmbed()
    .setTitle('Reports')
    .setColor("#FF0000")
    .setThumbnail(rUser.user.avatarURL())
    .addField("Usuário reportado", `${rUser} ID: ${rUser.id}`)
    .addField("Reportado por", `${message.author.username} ID: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Data", message.createdAt)
    .addField("Motivo", rreason);


    let reportschannel = client.channels.cache.get("873777830708776990")
    if(!reportschannel) return message.channel.send("Não foi possível encontrar o canal de Reports")
    reportschannel.send(reportEmbed);


    const report = new Report({
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.username,
        userID: rUser.user.id,
        reason: rreason,
        rUsername: message.author.username,
        rID: message.author.id,
        time: message.createdAt 
    });

    report.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    message.reply("Este report foi salvo na database com sucesso, logo algum suporte irá ver e resolver.")


}

module.exports.help = {
    name: "testreport"
}