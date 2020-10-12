const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/GyNRyX7.gif',
  'https://i.imgur.com/BiF7cwL.gif',
  'https://i.imgur.com/9Tsyk4S.gif',
  'https://i.imgur.com/VCmWwhA.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer um carinho!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('carinho')
        .setColor('#7ffaff')
        .setDescription(`${message.author} Fez carinho no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('carinho')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}