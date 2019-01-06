const Discord = require("discord.js")

module.exports.run = async (bot, message, args) {
 let embed = new Discord.RichEmbed()
 embed.setAuthor(bot.user.username, bot.user.avatarURL);
 embed.setDescription("Bot Information");
 embed.setColor("#0000ff");
 embed.addField("Bot Name:", bot.user.username, true);
 embed.addField("Bot Owner:", "Rishik01#7125", true);
 embed.addField("Total Servers:", bot.guilds.size, true);
}

module.exports.help = {
 name: "botinfo"
}
