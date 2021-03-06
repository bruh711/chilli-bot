const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const DIG = require("discord-image-generation");

exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }

  let avatar = await user.displayAvatarURL({ dynamic: false, format: "png" });
  let image = await new DIG.Karaba().getImage(avatar);
  let attach = new Discord.MessageAttachment(image, "notstonk.png");
  return await message.channel.send(attach);
};

exports.help = {
  name: "karaba",
  description: "karaba image",
  usage: "karaba [@user]",
  example: "karaba @kevin malone",
};

exports.conf = {
  aliases: [""],
  cooldown: 0,
};
