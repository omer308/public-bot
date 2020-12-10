const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": " <a:emoji_0:710533772415598622>",
  "1": " <a:emoji_1:710533787372617749>",
  "2": " <a:emoji_2:710533800303526001>",
  "3": " <a:emoji_3:710533815424254042>",
  "4": " <a:emoji_4:710533827122036856>",
  "5": " <a:emoji_5:710533838446526464>",
  "6": " <a:emoji_6:710533851822424074>",
  "7": " <a:emoji_7:710533867060330548>",
  "8": " <a:emoji_8:710533883262926938>",
  "9": " <a:emoji_9:710533898106568706>",
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};

"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
//Developer By CodeShare
exports.run = function(client, message, args) {
  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi Sayısı :** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi Sayısı :** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.filter(
    only => only.presence.status != "offline"
  ).size;
  let online = '**Çevrimiçi Kişi Sayısı :** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.RichEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor('BLACK')
.setDescription('' + sunucu + '\n \n' + online + '\n \n' + offline + '')
.setFooter('')

  message.channel.send(embed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};