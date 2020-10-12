const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/niLDvCj.gif',
  'https://i.imgur.com/meFyiVs.gif',
  'https://i.imgur.com/4yq8iFa.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa bem dado!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('tapão')
        .setColor('#d2691e')
        .setDescription(`${message.author} deu um tapa no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('vc mereçeu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}