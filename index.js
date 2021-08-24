const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const { MessageEmbed } = require('discord.js')

// const moment = require("moment")

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});
   
client.on("ready", () => {
  let activities = [
    `ysl shit?`,
    `real slatt ye`,
    `straightenin'`,
    `${client.users.cache.size} homies!`
  ],
  i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
      type: "PLAYING"
  }), 1000 * 60); 
  client.user
  .setStatus("dnd")
  .catch(console.error);
  console.log("aight!")
})


client.on('debug', async(debug) => {
  console.log(debug)
  })

client.login("ODQ0Mzk1ODUzNzAzMDIwNTk1.YKRy6w.gS7JDXd0Q_zf9Q51POmg8MgsGnc"); //Ligando o Bot caso ele consiga acessar o token
