const Discord = require('discord.js')//puxando o bagulho do discord

module.exports.run = async (bot, message, args) => {//exportando o comando como denunciar
  message.delete()  
  let msg = args.slice(1).join(' ')
  if(!msg) {
    return message.channel.send("Denuncie alguém")
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#00FFFF")
    .setFooter("Denúncia feita por: "+message.author.username, message.author.displayAvatarURL({dynamic: "gif", format: "png", size: 32}))
    .setTitle("Nova denúncia")
    .setDescription(msg)
    .setTimestamp()
  bot.channels.cache.get("744252620394201221").send(embed)
  message.channel.send("<:topzera:748591962206240788>  | Denúncia feita com sucesso <@"+message.author.id+"> !")
}