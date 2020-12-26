const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { prefix, token, bot_info } = require('./config.json');

client.login(token);

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

    if (command.aliases) {
        command.aliases.forEach(alias => {
            client.aliases.set(alias, command)
        })
    }
}

client.once('ready', () => {
    const guilds = client.guilds.cache.size;
    console.log(`Online in ${guilds} servers!`);
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command) || client.aliases.get(command);
    
    if(!client.commands.has(command) && !client.aliases.has(command)) return message.channel.send('Command doesn\'t exist!');

    try {
        cmd.execute(message, args, Discord, client);
    } 
    catch(error) {
        console.error(error);
        message.reply('There was an issue executing that command!');
    }
})