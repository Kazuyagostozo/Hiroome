const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/6ZugEYu.gif',
  'https://i.imgur.com/HYrw3cb.gif',
  'https://i.imgur.com/IyF5vmP.gif',
  'https://i.imgur.com/pDUpIEE.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar tchau!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('tchauzinho')
        .setColor('00ff00')
        .setDescription(`${message.author} Deu tchau pra(o) ${user} ate.`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('ate amiguinho')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}