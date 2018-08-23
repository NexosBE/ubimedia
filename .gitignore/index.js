const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("NDc5NjY2NjUzOTcwMzAwOTQ5.DmAtTA.uLyD2jDEXZu9OlpVf-gy7PuTfMI")
var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'En développement..', type: 0} })
    console.log("Connected");
});

bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "🙌aéroport")
    if (!bvn) return;
    const embed = new Discord.RichEmbed()
    .setColor('#009114')
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL)
    .setDescription("J'éspère que tu te plairas a nos côté")
    .addField(`Nombre de membres après son arrivée`, member.guild.memberCount)
    .setTimestamp()
    bvn.send(embed)
})

