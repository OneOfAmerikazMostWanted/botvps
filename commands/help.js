const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
try {
 let name = ('plug slatt');
 let avatar = {avatar: 'https://cdn.discordapp.com/icons/815667858897633362/39e6db742324eaf2f3b1a3233b7a0668.png?size=2048'}

const embed = new MessageEmbed()
.setAuthor(`Olá ${message.author.username}`, message.author.avatarURL())
.setTitle('Help')
.setColor('#FF0000')
.setDescription(`Lista de meus comandos`)
      .addFields(
        {
          name: '<:redlink:872617616521437214>  Diversos',
          value: `$avatar, $coinflip, $howtoask, $hug, $kiss, $wink`,
          inline: false
        },
        {
          name: '❓ Info',
          value: `$userinfo, $serverinfo, $botinfo, $ping, $weather`,
          inline: false
        },
        {
          name: '<:StaffSlatt:868974591928832061> Moderação',
          value: `$ban, $unban, $mute, $unmute, $kick, $clear, $warn, $say, $lock`,
          inline: false
        },
        {
          name: '<:ModeratorSlatt:868974592859992106> Defesa',
          value: `$antraid`,
          inline: false
        },
        {
          name: '<:redconfig:872955879551557734> Configurações',
          value: `$autorole`,
          inline: false
        },
        {
          name: 'EM BREVE',
          value: `EM BREVE`,
          inline: false
        }
      )
      .setTimestamp()
 message.channel.createWebhook(name, avatar)
 .then(w => { 
 w.send(embed).then((
 ) => w.delete())
});
 }

 catch (err) {
 message.reply('**calma ai prç**')
 console.log(err)
 }
} 