const Discord = require('discord.js');
const secrets = require('./secrets.json');
let clients = [];
for (s in secrets){
    clients.push(new Discord.Client());
}

clients.forEach((c) => c.on('ready', () => {
    console.log(`Logged in as ${c.user.tag}!`);
  })
);

clients.forEach((c) => c.on('message', msg => {
    if (msg.content === '!social distancing') {
      msg.reply('Keep your distance and wash your hands :)');
    }
  })
);

clients.forEach((c) => c.on('error', e => {
    console.error(e);
    })
);

for (let i = 0; i < clients.length; i++){
    clients[i].login(secrets[i]);
}