// писал на коленке, но работает! (наверно, это правда...)
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('кик готов!');
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('шизоид') // причина кика
          .then(() => {
            message.reply(`Успешно кикнуто: **${user.tag}**`);
          })
          .catch(err => {
            message.reply('Я не смогу кикнуть пользователя, наверно, он выше меня по ролям.');
            console.error(err);
          });
      } else {
        message.reply("Желательно *упомянуть* пользователя, а не заниматся бредятиной...");
      }
    } else {
      message.reply("Желательно *упомянуть* пользователя, а не заниматся бредятиной...");
    }
  }
});
client.login('твой_токенъ');
