module.exports = {
    name: 'hello',
    aliases: ['hey', 'hi'],
    execute(message, args, Discord, client){
        message.channel.send(`Hello ${message.author.username}!`);
    },
};