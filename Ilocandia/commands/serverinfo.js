module.exports = {
    name: 'serverinfo',
    aliases: ['server', 'guildinfo'],
    execute(message, args, Discord, client){
        const infoEmbed = new Discord.MessageEmbed()
            .setTitle("Server Info")
            .addField("Server Name", message.guild.name)
            .addField("Member Count", message.guild.memberCount + " members")
            .setFooter(`Requested by ${message.author.username}.`)
            .setColor('0xFFFFFF');
            message.channel.send(infoEmbed);
    },
};