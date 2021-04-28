module.exports = {
    name: 'cria',
    description: "cria puto",
    execute(client, message, args, Discord){
        var xingamentos = [' baitola', ' viadinho', ' puto', ' e o cara de cavalo, hein?', ', que história é essa que eu fiquei sabendo? não sei o que, sala de aula'];
        var result = Math.floor(Math.random() * 5);
        message.channel.send('<@198170933582626816>' + xingamentos[result])
    }
}  