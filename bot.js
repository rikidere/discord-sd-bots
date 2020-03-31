const Discord = require('discord.js');
const secrets = require('./secrets.json');
let schedule = require('node-schedule');
let clients = [];
for (s in secrets){
    clients.push(new Discord.Client());
}


clients.forEach((c) => {
    
    c.on('ready', () => {
        console.log(`Logged in as ${c.user.tag}!`);
        (c.user.username == "Alain Berset") && c.on('message', msg => {
            (msg.content === '!social distancing') && msg.reply('Keep your distance and wash your hands :)');
        }) && schedule.scheduleJob('26 * * * *', () => {

            let osc = c.guilds.resolve("124944592922476546");
            let chan = osc.channels.resolve("694653358203732048");
            chan.send('@everyone Keep your distance and wash your hands! :)');
    
        });
    });

    

    c.on('error', e => {
        console.error(e);
    });
});


for (let i = 0; i < clients.length; i++){
    clients[i].login(secrets[i]);
}