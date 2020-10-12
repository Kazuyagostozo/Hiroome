const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/hnCuHGz.gif',
  'https://i.imgur.com/104Ptoi.gif',
  'https://i.imgur.com/mccPEDl.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para morde!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('mordida pra vc aprende UwU')
        .setColor('#00ffff')
        .setDescription(`${message.author} mordeu ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('oso mal UwU')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}