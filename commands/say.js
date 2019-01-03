const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let reply = args.join(" ");
    message.delete().catch();
    message.channel.send(reply);
}

function clean(text) {
    if(typeof(text) === "string"){
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    }
    else{
        return text;
    }
}

module.exports.help = {
    name: "say"
}