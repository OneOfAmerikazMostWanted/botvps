const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const mongoose = require("mongoose");
const PrimeiraDama = require("../models/pdconfig.js");
module.exports.run = async (client, message, args) => {
    const member = message.member;
    const role = message.mentions.roles.first() || args[0];
    const roleExists = message.guild.roles.cache.find(r => r.id === role.id);
    if (!roleExists) return (`Não foi possível encontrar um cargo com o ID ${role.id}`);
    
    mongoose.connect('mongodb://localhost/PDConfig');
    const pdConf = new PrimeiraDama({
        _id: mongoose.Types.ObjectId(),
        roleID: role.id,
        adminId: message.author.id,
        time: message.createdAt
    });

     pdConf.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    return message.reply(`Cargo de primeira dama configurado com sucesso.`);
}