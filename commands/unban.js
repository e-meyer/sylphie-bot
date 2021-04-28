module.exports = {
    name: 'unban',
    aliases: ['desbanir', 'despunir'],
    description: "desbane o usuário especificado",
    execute(client, message, args, Discord){
        if(!message.member.permissions.has('ADMINISTRATOR')) 
            message.reply('adadd')
        else{

            var testCont = message.content.split(" ");
            var args1 = message.content.split(" ").slice(1);
            var unbanned = args1[0];
             
            if(testCont <= 1) 
                message.channel.send("Please provide an ID of the user to unban!");
            else{

                message.guild.members.unban(unbanned).then(unbanned => {
                var embed = new Discord.MessageEmbed()
                    .addField('Usuário despunido', `${unbanned}`)
                    .setAuthor(`${message.member.user.tag}`, message.member.user.avatarURL())
                    .setThumbnail(message.member.user.avatarURL())
                    //.addField("Time",
                    //    `Ban occured at ${human.date('m-d-y | h:i:s', new Date())} ${amPm()}`)
                    .addField('Autor da despunição', `<@${message.member.id}>`)
                    .setColor("#ff0000")
                    .setImage('https://media4.giphy.com/media/n1mNS67yQhtzzAN5H3/giphy.gif?cid=ecf05e47x8l24ahga4ja0rnr2szm7m0u8yj1cuaf55y44fqo&rid=giphy.gif&ct=g')
                    .setTimestamp()
                message.reply(embed);
                message.guild.member(unbanned).unban();
                });
            }
        }
    }
}