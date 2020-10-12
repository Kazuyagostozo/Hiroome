const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/6IiyWoc.gif',
  'https://i.imgur.com/iBa0E1U.gif',
  'https://i.imgur.com/BFBR1cq.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para massagear uma xota');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('massageando xota gostoza')
        .setColor('#00ffff')
        .setDescription(`${message.author} Massageor xota do(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('massagem na xota gostoza')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}