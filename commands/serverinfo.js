const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setColor("#0000ff");
    embed.setAuthor(message.guild.name, message.guild.iconURL);
    embed.setThumbnail(message.guild.iconURL);
    embed.addField("Server Owner", message.guild.owner );
    embed.addField("Created At", message.guild.createdAt.toLocaleString('en-us'));

    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo"

};