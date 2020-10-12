const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/J98ti4T.gif',
  'https://i.imgur.com/eDfxnl5.gif',
  'https://i.imgur.com/KmoTkt7.gif',
  'https://i.imgur.com/0k1bakh.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar uma voadora!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('voadora cabulosa')
        .setColor('#00ffff')
        .setDescription(`${message.author} Deu uma voadora no (a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('mlk e brabo')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}