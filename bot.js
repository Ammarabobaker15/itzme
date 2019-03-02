const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550360514702737449")
setInterval(function() {
channel.send(`ammar ammar ammar ammar`);
}, 30)
})

client.login(process.env.BOT_TOKEN);