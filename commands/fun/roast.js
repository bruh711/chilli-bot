const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  if (message.mentions.users === message.author.username)
    return message.reply("You can not roast yourself");
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to roast them.");

  let body = await fetch(
    "https://evilinsult.com/generate_insult.php?lang=en&type=json",
  );
  let roast = await body.json();

  message.channel.send(user.username + ", " + roast.insult);
};

exports.help = {
  name: "roast",
  description: "roasts the mentioned user",
  usage: "roast [@user]",
  example: "roast @kevin malone",
};

exports.conf = {
  aliases: ["r"],
  cooldown: 0,
};
