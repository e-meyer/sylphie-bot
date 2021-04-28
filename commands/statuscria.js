module.exports = {
    name: 'statuscria',
    description: "cria puto",
    execute(client, message, args, Discord){

        var embedMessage = new Discord.MessageEmbed()
	        .setColor('#a80303')
	        .setTitle('Bruno Machado (Matador)')
	        .setURL('https://www.instagram.com/bruno_machado2/')
	        .setAuthor('Cria', 'https://cdn.discordapp.com/attachments/632771954520096770/836458753900412968/pp.png', 'https://www.instagram.com/bruno_machado2/')
	        .addField('Cria (viado) specs:', '\u200B')
            //.addField('\u200B', '\u200B', true)
            .addField('Beleza:', '4/10', true)
            .addField('Limpo:', '0/10', true)
            .addField('Dentes:', '3/10', true)
            .addField('Fanho:',  '8/10', true)
            .addField('Baitola:', '10/10', true)
            .addField('Overall:', '5,8/10', true)
	        .setImage('https://cdn.discordapp.com/attachments/632771954520096770/836458753900412968/pp.png')

        message.channel.send(embedMessage)
    }
}  