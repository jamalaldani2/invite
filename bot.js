const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "W";
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='Wmember')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.iconURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(' عدد اعضاء السيرفر  ')
      .addBlankField(true)
      .addField('.',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });








client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
