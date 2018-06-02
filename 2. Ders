const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async => {

    console.log("BOT Başladı!");
    bot.user.setPresence({game: { name: "Discord.JS Dersleri", type: 3 } });

});

bot.on("message", async message => {

    console.log(`${message.author.username}:${message}`);
    if(message.content.toLowerCase().includes("sa")) {
       message.channel.send("**As.**");
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

bot.login("token");
