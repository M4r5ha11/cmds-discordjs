// тоже писал на коленке, но робит:)
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('бан готов!');
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'цыганские фокусы!', // причина бана 
          })
          .then(() => {
            // если успешно забанен:
            message.reply(`Пользователь **${user.tag}** забанен.`);
          })
          .catch(err => {
            message.reply('Я не смогу кикнуть пользователя.');
            // если ошибка, выводится в консольъ
            console.error(err);
          });
      } else {
        message.reply("пингани пж юзера, окэй?");
      }
    } else {
      message.reply("пингани пж юзера, окэй?");
    }
  }
});
client.login('ВАШ_ТОКЕНЪЪЪЪ!!!');
