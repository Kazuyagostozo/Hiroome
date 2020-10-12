const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/9ckwY8H.gif',
  'https://i.imgur.com/9ckwY8H.gif',
  'https://i.imgur.com/9ckwY8H.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para começa a luta!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('lutando')
        .setColor('#00ffff')
        .setDescription(`${message.author} começo a luta isano com o(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('eu vou vencer')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}