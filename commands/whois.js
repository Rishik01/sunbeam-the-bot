const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let person = message.mentions.users.first() ? message.guild.members.get(message.mentions.users.first().id) : message.member
    let embed = new Discord.RichEmbed();
    embed.setAuthor(person.user.username, person.user.avatarURL);
    embed.setColor("#0000ff");
    embed.setThumbnail(person.user.avatarURL);
    embed.setFooter(`User ID: ${person.id} - Requested by ${message.author.username}`);
    embed.addField("Name:", person.user.username, true);
    embed.addField("Discriminator:", person.user.discriminator, true);
    embed.addField("Nickname:", person.user.nickname || "None", true);
    embed.addField("Account Created:", person.user.createdAt.toLocaleString('en-us'), true);
    embed.addField("Joined At:", person.joinedAt.toLocaleString('en-us'), true);
    embed.addField("Status:", person.user.presence.status, true);
    embed.addField("Playing:", person.user.presence.game || "None", true);
    message.channel.send(embed);
    
}

module.exports.help = {
    name: "whois"
}
