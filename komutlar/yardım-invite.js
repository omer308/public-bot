const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**<:Simsek:712992067126820895> İnvite Komutları**',`
**:white_small_square: davet-kanal** : Davet-Takip Log Kanalını Belirler!
**:white_small_square: davetler** : Kişinin Davetlerini Gösterir!
**:white_small_square: davetsayısı** : Sunucuda Kaç Davet Linki Var Onu Gösterir!
**:white_small_square: davet-sıralaması** : Davet Sıralamasını Gösterir!
**:white_small_square: rütbe-ekle** : Rütbe Eklersiniz!
**:white_small_square: rütbe-liste** : Eklenen Rütbeleri Gösterir!
**:white_small_square: rütbe-sil** : Eklediğiniz Rütbeyi Silersiniz!`)
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
  name: 'invite',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   