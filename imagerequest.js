const {MessageEmbed} = require("discord.js");
const sa = require("superagent");
 let {body} = await sa
        .get(`http://insanity78.rf.gd/api/example.json`)
let e = new MessageEmbed()
        .setAuthor("iNSaNiTY78 Examples")
        .setImage(body.url)
        .setColor("RANDOM")
message.channel.send(e)
// npm install superagent - чтобы работало
