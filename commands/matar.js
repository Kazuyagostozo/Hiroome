const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/iAIwXra.gif',
  'https://i.imgur.com/xE4eXhS.gif',
  'https://i.imgur.com/WtuNd30.gif',
  'https://i.imgur.com/P78jFc6.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para matar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('mato')
        .setColor('#deea94')
        .setDescription(`${message.author} mato o(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('caralho bulacha vc morreu ;-;')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}