module.exports = {
    name: 'me',
    aliases: [],
    execute(message, args, Discord, client){
        const userEmbed = new Discord.MessageEmbed()
            .setTitle("User Info")
            .addField("Username", message.author.username)
            .addField("ID", message.author.id)
            .setFooter(`Requested by ${message.author.username}.`)
            message.channel.send(userEmbed);
    },
};