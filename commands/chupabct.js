const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/fRwlxyN.gif',
  'https://i.imgur.com/6tP8CJ3.gif',
  'https://i.imgur.com/9T1VeA7.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para chupa!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('chupada gostoza')
        .setColor('#00ffff')
        .setDescription(`${message.author} Esta chupando a bct da ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('nossa que gostozo')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}