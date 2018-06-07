const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = "?";


bot.on("ready", async => {

    console.log("BOT Başladı!");
    bot.user.setPresence({game: { name: "Discord.JS Dersleri", type: 3 } });

});

bot.on("message", async message => {

    console.log(`${message.author.username}:${message}`);
    if(message.content.toLowerCase().includes("sa")) {
       message.channel.send("**As.**");
    }

    if(message.content.toLowerCase() == prefix+"gecikme") {
      if(message.author.id !== "391995270100942848" && message.author.id !== "322391737085460481") return message.channel.send("Kullanamazsın!");
      message.channel.send(`Gecikme: ${bot.ping}ms`);
    }

});

bot.on("guildMemberAdd", async member => {

    let guild = member.guild;
    guild.channels.find("name", "genel").send(`${member} sunucuya katıldı! Sunucu: ${guild.name}`);

});

bot.on("guildMemberRemove", async member => {

    let guild = member.guild;
    guild.channels.find("name", "genel").send(`${member} sunucudan ayrıldı! Sunucu: ${guild.name}`);

});

bot.on("channelCreate", async channel => {

      let guild = channel.guild;
      guild.channels.find("name", "genel").send(`<#${channel.id}> oluşturuldu! Sunucu: ${guild.name}`);

});

bot.on("channelDelete", async channel => {

    let guild = channel.guild;
    guild.channels.find("name", "genel").send(`${channel.name} silindi! Sunucu: ${guild.name}`);

})

bot.login("NDUxMzg2MDQ4NzQ0NzgzODgy.Dfazvg.DC-vrNXCjSOLOrqsavizvuoEsLE");
