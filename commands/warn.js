const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You don't have the right permissions for this command.")
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.channel.send("Couldn't find that user")
    if(wUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Nice try bucko")
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send("You must have a reason.")
    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };
    warns[wUser.id].warns++;
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if(err){
           return console.log(err)
        } 
    })
    let numWarn = warns[wUser.id].warns;
    message.channel.send(`Warned ${wUser} for ${reason}. They have been warned ${numWarn} times.`);
};

module.exports.help = {
    name:"warn"
}