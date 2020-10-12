const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/LcHoJRu.gif',
  'https://i.imgur.com/LcHoJRu.gif',
  'https://i.imgur.com/LcHoJRu.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('giratorio')
        .setColor('#00ffff')
        .setDescription(`${message.author} uso taekwondo renovado giratorio no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('estou furioso')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}