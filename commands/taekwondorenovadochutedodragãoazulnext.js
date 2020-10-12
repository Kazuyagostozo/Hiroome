const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/9LA5H6C.gif',
  'https://i.imgur.com/9LA5H6C.gif',
  'https://i.imgur.com/9LA5H6C.gif'
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
        .setTitle('dragão azul ')
        .setColor('#00ffff')
        .setDescription(`${message.author} uso taekwondo renovado chute do dragão azul no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('ataque mega forte')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}