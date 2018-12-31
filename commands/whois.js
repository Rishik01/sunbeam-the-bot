const Discord = require("discord.js")

module.exports.run = async (message, bot, args) => {
    let whodat = message.mentions.users.first()
    if(!whodat){
         let whodat = message.author
    } 
    console.log(whodat);
}

module.exports.help = {
    name: "whois"
}