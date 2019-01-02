const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nice try bucko");
    let purge = args.join(" ");
    if(purge > 100 || 1 > purge) return message.channel.send("Invalid number.")
    message.channel.bulkDelete(purge);

}

module.exports.help = {
    name: "purge"
}