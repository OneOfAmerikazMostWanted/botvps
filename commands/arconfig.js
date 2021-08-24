
const Discord = require("discord.js")
module.exports = {
	name: 'config',
	run: async (client, message, args, db) => {
		let ops = [
			'channelCreateLimit',
			'channelDeleteLimit',
			'roleCreateLimit',
			'roleDeleteLimit',
			'banLimit',
			'kickLimit',
			'logs',
			'show',
			'punishment'
		];
		let disabled = ":x: Desabilitado"
		function check(msg, arr) {
			return arr.some(op => op.toLowerCase() === msg.toLowerCase());
		}
		let bruh = new Discord.MessageEmbed()
		.setTitle('**Anti-Raid | Config**')
		.setDescription(`
**As opções estão listadas abaixo:**
config ${ops.join("\n config ")}
`)
.setColor("#FF0000")
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(message.guild.name + " | slatt", message.guild.iconURL())
		if (!args[0]) return message.channel.send({ embed: bruh });
		if (check(args[0], ops) === false)
			return message.channel.send(
				':x: | **Unicas opções são: `channelCreateLimit`, `channelDeleteLimit`, `roleCreateLimit`, `roleDeleteLimit`, `banLimit`, `kickLimit`, `logs`, `show` & `punishment`**'
			);
			switch (args[0].toLowerCase()) {
			  case "show":
let rcl = db.get(`rolecreate_${message.guild.id}`)
let rdl = db.get(`roledelete_${message.guild.id}`)
let ccl = db.get(`channelcreate_${message.guild.id}`)
let cdl = db.get(`channeldelete_${message.guild.id}`)
let bl = db.get(`banlimit_${message.guild.id}`)
let kl = db.get(`kicklimit_${message.guild.id}`)
let logs = db.get(`logs_${message.guild.id}`)
let punish = db.get(`punish_${message.guild.id}`)
if (rcl === null) rcl = disabled
if (rdl === null) rdl = disabled
if (ccl === null) ccl = disabled
if (cdl === null) cdl = disabled
if (bl === null) bl = disabled
if (kl === null) kl = disabled
if (logs === null) logs = disabled
if (logs !== null && logs !== disabled) {
  logs = client.channels.cache.get(logs)
  if (!logs) logs = disabled
}
let show = new Discord.MessageEmbed()
.setTitle("**Anti-Raid | Config**")
.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
.setFooter(message.guild.name + " | slatt ", message.guild.iconURL())
.addField("Channel Create Limit", ccl)
.addField("Channel Delete Limit", cdl)
.addField("Role Create Limit", rcl)
.addField("Role Delete Limit", rdl)
.addField("Ban Limits", bl)
.addField("Kick Limits", kl)
.addField("Logs", logs.toString())
.addField("Punishment", punish)
.setColor("GREEN")
return message.channel.send({ embed: show })
			    break;
			  case "channelcreatelimit":
if (!args[1]) return message.channel.send(":x: | **Envie o limite no chat.**")
if (isNaN(args[1])) return message.channel.send(":x: | **O limite deve ser um número**")
if (Number(args[1]) < 1) return message.channel.send(":x: | **O limite não pode ser zero ou números negativos.**")
db.set(`channelcreate_${message.guild.id}`, Number(args[1]))
return message.channel.send("**O limite de canais criados foi setado para " + Number(args[1]) + "**")
			    break;
			  case "channeldeletelimit":
if (!args[1]) return message.channel.send(":x: | **Envie o limite no chat.**")
if (isNaN(args[1])) return message.channel.send(":x: | **O limite deve ser um número**")
if (Number(args[1]) < 1) return message.channel.send(":x: | **O limite não pode ser zero ou números negativos.**")
db.set(`channeldelete_${message.guild.id}`, Number(args[1]))
return message.channel.send("**O limite de canais deletados foi setado para " + Number(args[1]) + "**")
			    break;
			  case "rolecreatelimit":
if (!args[1]) return message.channel.send(":x: | **Envie o limite no chat.**")
if (isNaN(args[1])) return message.channel.send(":x: | **O limite deve ser um número**")
if (Number(args[1]) < 1) return message.channel.send(":x: | **O limite não pode ser zero ou números negativos.**")
db.set(`rolecreate_${message.guild.id}`, Number(args[1]))
return message.channel.send("**O limite de cargos criados foi setado para " + Number(args[1]) + "**")
			    break;
			  case "roledeletelimit":
if (!args[1]) return message.channel.send(":x: | **Envie o limite no chat.**")
if (isNaN(args[1])) return message.channel.send(":x: | **O limite deve ser um número**")
if (Number(args[1]) < 1) return message.channel.send(":x: | **O limite não pode ser zero ou números negativos.**")
db.set(`roledelete_${message.guild.id}`, Number(args[1]))
return message.channel.send("**O limite de cargos deletados foi setado para " + Number(args[1]) + "**")
			    break;
			  case "banlimit":
if (!args[1]) return message.channel.send(":x: | **Envie o limite no chat.**")
if (isNaN(args[1])) return message.channel.send(":x: | **O limite deve ser um número.**")
if (Number(args[1]) < 1) return message.channel.send(":x: | **O limite não pode ser zero ou números negativos.**")
db.set(`banlimit_${message.guild.id}`, Number(args[1]))
return message.channel.send("**O limite de banimentos foi setado para " + Number(args[1]) + "**")
			    break;
			  case "kicklimit":
if (!args[1]) return message.channel.send(":x: | **Envie o limite no chat.**")
if (isNaN(args[1])) return message.channel.send(":x: | **O limite deve ser um número.**")
if (Number(args[1]) < 1) return message.channel.send(":x: | **O limite não pode ser zero ou números negativos.**")
db.set(`kicklimit_${message.guild.id}`, Number(args[1]))
return message.channel.send("**O limite de expulsões foi setado para " + Number(args[1]) + "**")
			    break;
			  case "punishment":
if (!args[1]) return message.channel.send(":x: | **Escolha uma punição**")
if (check(args[1], ["ban", "kick", "demote"]) === false) return message.channel.send(":x: | **A punição deve ser ban, kick ou remoção de cargos.**")
db.set(`punish_${message.guild.id}`, args[1].toLowerCase())
return message.channel.send("**A punição escolhida foi a " + args[1] + "**")
			    break;
			  case "logs":
let channel = message.mentions.channels.first()
if (!channel) return message.channel.send(":x: | **Mencione o canal**")
if (channel.guild.id !== message.guild.id) return message.channel.send(":x: | **Este canal não foi encontrado neste servidor**")
db.set(`logs_${message.guild.id}`, channel.id)
channel.send("**Anti Raid logs Channel**")
return message.channel.send("**O logs anti raid foi setadp no canal: " + args[1] + "**")
			    break;
			}
	}
};