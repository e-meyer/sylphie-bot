module.exports = {
    name: 'ping',
    description: "this is a ping message",
    execute(client, message, args, Discord){
        message.channel.send('pong')
    }
}  