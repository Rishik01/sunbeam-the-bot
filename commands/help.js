const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed =  new Discord.RichEmbed();
    embed.setColor("#0000ff");
    embed.setAuthor(bot.user.username, bot.user.avatarURL);
    embed.setDescription("Commands");
    embed.addField("Serverinfo", "Gives information about the server.");
    embed.addField("Whois", "Gives information about the mentioned user.");
    embed.addField("Purge", "Deletes the specified amount of messages.");
    embed.addField("Say", "Says what the user says.");
    embed.setFooter("Prefix is 2.");
    message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}