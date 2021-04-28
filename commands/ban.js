module.exports = {
    name: 'ban',
    aliases: ['banir', 'punir'],
    description: "bane o usuário especificado",
    execute(client, message, args, Discord){
        if(!message.member.permissions.has('ADMINISTRATOR')) 
            message.reply('adadd')
        else{
            const banned = message.mentions.members.first();
            //var args = message.args.split(" ");
            if(!banned)
                message.reply("Especifique um usuário para banir")
            else if (message.guild.member(banned).bannable) {
                    client.users.cache.get(banned.id).send(`You have been banned from ${message.guild.name} by ${message.member.username}`);
                    //message.guild.member(banned).ban().then(banned => {
                    var embed = new Discord.MessageEmbed()
                        .addField('Usuário punido', `${banned}`)
                        .setAuthor(`${message.member.user.tag}`, message.member.user.avatarURL())
                        .setThumbnail(message.member.user.avatarURL())
                        //.addField("Time",
                        //    `Ban occured at ${human.date('m-d-y | h:i:s', new Date())} ${amPm()}`)
                        .addField('Autor da punição', `<@${message.member.id}>`)
                        .setColor("#ff0000")
                        .setImage('https://media1.tenor.com/images/4f70c8f25f6836936afc348c1f982373/tenor.gif?itemid=16387934')
                        .setFooter(`ID do usuário: ${banned}`)
                    message.reply(embed);
                    message.guild.member(banned).ban();
                    //});
                  } else message.channel.send("I am unable to ban that member.");
        }
    }
}