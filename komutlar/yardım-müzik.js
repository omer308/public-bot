const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Müzik Komutları**',`
**:white_small_square: oynat** : İstediğiniz Müziği Oynatır!
**:white_small_square: durdur** : Oynatılan Müziği Durdurur!
**:white_small_square: geç** : Sıradaki Şarkıya Geçer!
**:white_small_square: ses** : Ses Seviyesini Belirler!
**:white_small_square: tekrar** : Çalan şarkı bitince tekrar çalar!
**:white_small_square: kuyruk** : Sıradaki Şarkıları Gösterir!
**:white_small_square: devamet** : Durdurulan Müziği Oynatır!
**:white_small_square: oynatılan** : Şuan da Çalan Müziği Gösterir!
**:white_small_square: ping** : Botun Pingini Gösterir!
**:white_small_square: kapat** : Oynatılan Müziği Kapatır!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "[<a:Rgbsag:712244124924772373> Davet Linki](yakında)\n[<a:Rgbsag:712244124924772373> Destek Sunucu](https://discord.gg/Bhn7nde)\n[<a:Rgbsag:712244124924772373> Website](yakında)")
.setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'müzik',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   