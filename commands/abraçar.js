const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/lctmfji.gif',
  'https://i.imgur.com/NiRchZ2.gif',
  'https://i.imgur.com/alczzoW.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('abraçar')
        .setColor('#00ffff')
        .setDescription(`${message.author} abraço ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('abraço bem fofinho')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}