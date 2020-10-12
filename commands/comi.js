const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, comi sua mãe seu pai sua irmã sua tia seu filha da puta e vou comer vc seu arrombado`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, aqui estão alguns dos nossos comandos h!kiss etc.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "752617074014289960");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

  const emojis = ["✔️", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}