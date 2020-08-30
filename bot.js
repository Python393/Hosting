const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready');
});

client.on('message', message => {
    if (message.content === '!p ping') {
      message.reply('pong');
    }
});

client.login(process.env.);
