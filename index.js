const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

/*client.on('guildMemberAdd', () => {
    const channelId = '648952426052714506';
    client.on('guildMemberAdd', (member) => {
        const message = new Discord.MessageEmbed()
            .setColor('#a80303')
            .setTitle('Bem-vindo(a)!')
            .setAuthor(`${member.user.tag}`, member.user.avatarURL())
            .setThumbnail(member.user.avatarURL())
            .setDescription(`Ei <@${member.id}>, seja bem-vindo.`)
            .setImage('https://i.pinimg.com/originals/62/bc/d6/62bcd64007bdf448ef581f80310a5a30.jpg')
            .setTimestamp();


        const channel = member.guild.channels.cache.get(channelId);
        member.roles.add('648957894624018442');
        channel.send(message);
    })
})*/

client.login('ODM1OTUzNDgwNDM0ODQzNjgx.YIW8WQ.rDenz7KjRXUN67iwpLfGQT1wvpA');