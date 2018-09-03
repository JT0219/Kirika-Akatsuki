const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', async () => {
    
    bot.user.setActivity('with Shirabe, dess!', { type: "PLAYING"} );

});

bot.on('message', (message) => {

    if(message.author.bot) return;
        if(message.content == 'Good morning, Kirika!'){
        message.channel.send('Good morning, dess!');
    }
    if(message.content == 'Good evening, Kirika!'){
        message.channel.send('Good evening, dess!');
    }
    if(message.content == 'Dess!'){
        message.channel.send('Dess!');
    }
    if(message.content == 'Dess'){
        message.channel.send('pacito!');
    }
    if(message.content == 'Hello, Kirika!'){
        message.channel.send('Hello, dess!');
    }
    if(message.content == 'Goodbye, Kirika!'){
        message.channel.send('Bye-bye, dess!');
    }
    if(message.content == 'Who is the best couple in anime?'){
        message.channel.send('DMJii of course, dess!');
    }
    if(message.content == 'Dess or Death?'){
        message.channel.send('Death, of co-I mean, dess, of course, dess!');
    }
    if(message.content == 'Dess?'){
        message.channel.send('?');
    }
    if(message.content == 'DESS!!!!'){
        message.channel.send('Don\'t shout at me, dess!');
    }
        if(message.content == 'Can I ping you?'){
        message.channel.send('Don\'t you dare ping me, dess.');
    }
    if(message.content == 'Kongou Dess!'){
        message.channel.send('Kongou what, dess?');
    }
    if (message.mentions.users.has('464722512169795594')){
        message.channel.send('Did you just fucking ping me, dess?');
    }
    if(message.content == 'Who are you?'){
        message.channel.send('I\'m Kirika, dess!');
    }
    if(message.content == 'Desu!'){
        message.channel.send('That\'s not the right spelling, dess.');
    }
    if(message.content == 'Say Shirabe'){
        message.channel.send('My love!');
    }
    if(message.content == 'です!'){
        message.channel.send('What the fuck are you saying, dess?');
    }
    if(message.content == 'Can I call you Renown?'){
        message.channel.send('Just because I have the same hair as her and share the same seiyuu doesn\'t make me want you to call me Renown, dess.');   
    }

});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('456297725223501825').send('**' + member.user.username + '** has joined the server, dess! I hope this user enjoys the server, dess!!');
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('456297725223501825').send('**' + member.user.username + '** has left the server, dess. Looks like they did not admire their waifu, dess.');
});

bot.login(process.env.BOT_TOKEN);
