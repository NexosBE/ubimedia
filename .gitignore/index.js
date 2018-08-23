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
    .setAuthor(member.user.tag, member.user.avatarURL)
    .setTitle("Arrivée d'un nouvel utilisateur")
    .addField("Un nouvel utilisateur vient d'arriver", `Il s'agit de ${member.user.tag}`, true)
    .setDescription("J'éspère que tu te plairas a nos côté")
    .addField(`Nombre de membres après l'arrivée de __${member.user.tag}__`, member.guild.memberCount)
    .setFooter(`ID : ${member.user.ud}`)
    .setTimestamp()
    bvn.send(embed)
})

