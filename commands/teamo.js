const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/vKljevL.gif[',
  'https://i.imgur.com/SDeaQJQ.gif',
  'https://i.imgur.com/MdGDITb.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fala eu te amo!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Eu te amo muito')
        .setColor('#00ffff')
        .setDescription(`${message.author} Mando eu te amo pra (o) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('amo tanto vc')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}