const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/xcNFl7X.gif',
  'https://i.imgur.com/Nbq0Lhv.gif',
  'https://i.imgur.com/AcGwJFC.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para transa!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('sexo gostozo')
        .setColor('#00ffff')
        .setDescription(`${message.author} Fez sexo com o(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('fudendo ate o talo')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}