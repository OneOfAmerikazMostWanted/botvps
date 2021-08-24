const Discord = require('discord.js')
const fetch = require('node-fetch')

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  var h = new fetch.Headers()
  h.append('Authorization', 'Bot ODYzOTY0MTgzMjk2NDc1MTc2.YOujWA.yiXybjNUetaFUmiJtNAwWbhGlhs')
  
  var r = new fetch.Request('https://discord.com/api/v9/users/'+user.id,{
    headers: h,
    method: "GET"
  })

  await fetch(r).then(async response => {
    response.json().then(async json => {
      if(!json || !json.banner) return message.channel.send('Esse loka não tem banner')
      let banner
      if(json.banner.startsWith("a_")){
        banner = "https://cdn.discordapp.com/banners/"+json.id+"/"+json.banner+".gif?size=1024"
      }else{
        banner = "https://cdn.discordapp.com/banners/"+json.id+"/"+json.banner+".png?size=1024"
      }
      let embed = new Discord.MessageEmbed()
      .setTitle(`Banner de ${json.username} `)
      .setColor('#FF0000')
      .setImage(banner)
      .setFooter(`• Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, format: "png" }));
      await message.channel.send(embed)
    })
  })

}

