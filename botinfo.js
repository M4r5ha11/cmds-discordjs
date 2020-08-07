'use strict';
const { Client, MessageEmbed } = require('discord.js');
const config = require("../config.json");
const os = require('os')
const client = new Client();
client.on('ready', () => {
  console.log('info готов!');
});
client.on('message', message => {
  if (message.content === '!info') {
    const embed = new MessageEmbed()
      .setTitle('бла бла блаа:')
      .setColor("решил не ебатся с цветом, пишите сами свой=)")
            .setDescription(`\nЮзается: Node ${process.version}\ndiscord.js v${require('discord.js').version}\nОЗУ: ${process.memoryUsage().rss / 1024 ** 2 | 0}МБ/${formatBytes(os.totalmem(), 1)} - ${((os.totalmem() - os.freemem()) / os.totalmem()*100).toFixed(2)}%\nЦП: ${(100 - (getCPUInfo() * 100)).toFixed(2)}%\n\nРазработчик: iNSaNiTY78#6387`);
    message.channel.send(embed);
  }
function formatBytes(bytes, decimals) {
   if (bytes === 0) return '0 Bytes'
   let k = 1000,
       dm = decimals + 1 || 3,
       sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
       i = Math.floor(Math.log(bytes) / Math.log(k))
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
function getCPUUsage() {
  return new Promise((resolve, reject) => {
    let stats1 = getCPUInfo()

    setTimeout(() => {
      let stats2 = getCPUInfo()

      let idle  = stats2.idle - stats1.idle
      let total = stats2.total - stats1.total

      resolve(idle / total)
    }, 1000)
  })
}
function getCPUInfo() {
  let idle = 0, total = 0, cpus = os.cpus()
  for (let cpu of cpus) {
    for (let thing in cpu.times)
      total += cpu.times[thing]
    idle += cpu.times.idle
 }
}
});
client.login('твой_токенъ');
