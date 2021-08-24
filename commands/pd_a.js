const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const mongoose = require("mongoose");
const PrimeiraDama = require("../models/pd_a.js")

module.exports.run = async (client, message, args) => {
    await message.delete();
    mongoose.connect('mongodb://localhost/PrimeirasDamas');
   
    if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply("Você não é administrador.");
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.reply("Não consegui encontrar este usuário.");
    const role = message.guild.roles.cache.get('873993442143912026');
    if (!role) return message.reply("Não foi possível encontrar o cargo de Primeira dama.");

    let pdembed = new MessageEmbed()
    .setTitle('New First Lady | <:bloodws:870316469437759579>')
    .setColor("#FF0000")
    .setThumbnail(member.user.avatarURL()) //
    .addField("Usuário", `${member} ID: ${member.id}`)
    .addField("Dado por", `${message.author.username} ID: ${message.author.id}`)
    .addField("Cargo recebido", `${role}`)
    .addField("Data", message.createdAt);
   
    if (member.roles.cache.has('873993442143912026'))
    return message.reply("Esse usuário ja é primeira dama.");

    try {
      member.roles.add(role)
   } catch(e) {
      message.reply("Não foi possível setar o cargo.")
      console.log(`Houve um erro ao executar o comando pd_a:`);
      console.error(e); 
   }
    
     const pda = new PrimeiraDama({
        _id: mongoose.Types.ObjectId(),
        pdusername: member.user.username,
        idpd: member.user.id,
        adminuser: message.author.username,
        adminid: message.author.id,
        time: message.createdAt
    });

     pda.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

     return message.channel.send(pdembed);
}