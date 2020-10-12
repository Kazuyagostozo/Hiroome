const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/w9gtJtc.gif',
  'https://i.imgur.com/w9gtJtc.gif',
  'https://i.imgur.com/w9gtJtc.gif'
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
        .setTitle('dragão')
        .setColor('#00ffff')
        .setDescription(`${message.author} uso ataque do dragão reverso no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('isano pivete')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}