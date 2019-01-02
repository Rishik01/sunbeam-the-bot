const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed();
    embed.setAuthor(message.guild.name, message.guild.iconURL);
    embed.setThumbnail(message.guild.iconURL);
    embed.setColor("0000ff");
    embed.setTitle("Server Information");
    embed.addField("Server Owner:", message.guild.owner, true);
    embed.addField("Server Region:", message.guild.region, true);
    embed.addField("Members:", message.guild.memberCount, true);
    embed.addField("Emojis", message.guild.emojis.size, true);
    embed.addField("Created On:", message.guild.createdAt.toLocaleString('en-us'), true);
    embed.addField("Number of Roles:", message.guild.roles.size - 1, true);
    embed.setFooter(`Server ID: ${message.guild.id} - Requested by ${message.author.username}`);

    message.channel.send(embed);
}


module.exports.help = {
    name: "serverinfo"

};
