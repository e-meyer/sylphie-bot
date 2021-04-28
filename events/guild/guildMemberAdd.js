module.exports = (Discord, client, member) => {
        const channelId = '835958247331725315';

        const message = new Discord.MessageEmbed()
            .setColor('#a80303')
            .setTitle('Bem-vindo(a)!')
            .setAuthor(`${member.user.tag}`, member.user.avatarURL())
            .setThumbnail(member.user.avatarURL())
            .setDescription(`Ei <@${member.id}>, seja bem-vindo.`)
            .setImage('https://i.pinimg.com/originals/62/bc/d6/62bcd64007bdf448ef581f80310a5a30.jpg')
            .setTimestamp();

        const channel = member.guild.channels.cache.get(channelId);
        member.roles.add('836615819140137020');
        channel.send(message);
}