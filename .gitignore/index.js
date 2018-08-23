const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'En développement...', type: 0} })
    console.log("Connected");
});

bot.login("NDc5NjY2NjUzOTcwMzAwOTQ5.DmAtTA.uLyD2jDEXZu9OlpVf-gy7PuTfMI")


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -?help");
    }

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🙌aéroport").send(`Bienvenue ${member} sur **UbiMedia - Discord Officiel !`);
})


})
