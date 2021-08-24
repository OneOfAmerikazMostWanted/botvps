const Discord = require("discord.js");
exports.run = async (client, message, args) => {
 try {
 let name = ('Every');
 let avatar = {avatar: 'https://cdn.discordapp.com/avatars/852657346676392056/d474444e233c54f4d75cfd1c318d185a.png?size=1024'}
 let matth = [
'solo',
    'codein ? hmm ',
    'fukk feelings',
    'fuk da shi',
    'spank',
    'mp bitch'
];
let arg = matth[Math.floor(Math.random() * matth.length)]
 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())
 });
 } catch (err) {
 message.reply('**ngm liga **')
 console.log(err)
 }
} 