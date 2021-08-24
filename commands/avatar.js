const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {


  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor(`#FF0000`) 
    .setTitle(`<:bloods:870418093481000991> | ${client.user.username}`)
    .setDescription(`<a:setavermelha:873020922636959774>⠀**Download:** [Link](${avatar})⠀⠀⠀⠀⠀⠀<a:setavermelha:873020922636959774>⠀ **Usuário: ${user.username}**`)
    .setImage(avatar) 
    .setFooter(`• Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: "png"}));
    await message.delete()
    await message.channel.send(embed);
 
}