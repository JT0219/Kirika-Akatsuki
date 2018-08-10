        if(message.content == 'Good morning, Kirika!'){
            member.guild.channels.get('373571542769991681').send('Good morning, dess!');
    }
    if(message.content == 'Good evening, Kirika!'){
        member.guild.channels.get('373571542769991681').send('Good evening, dess!');
    }
    if(message.content == 'Dess!'){
        member.guild.channels.get('373571542769991681').send('Dess!');
    }
    if(message.content == 'Dess'){
        member.guild.channels.get('373571542769991681').send('pacito!');
    }
    if(message.content == 'Hello, Kirika!'){
        member.guild.channels.get('373571542769991681').send('Hello, dess!');
    }
    if(message.content == 'Goodbye, Kirika!'){
        member.guild.channels.get('373571542769991681').send('Bye-bye, dess!');
    }
    if(message.content == 'Who is the best couple in anime?'){
        member.guild.channels.get('373571542769991681').send('DMJii of course, dess!');
    }
    if(message.content == 'Dess or Death?'){
        member.guild.channels.get('373571542769991681').send('Death, of co-I mean, dess, of course, dess!');
    }
    if(message.content == 'Dess?'){
        member.guild.channels.get('373571542769991681').send('?');
    }
    if(message.content == 'DESS!!!!'){
        member.guild.channels.get('373571542769991681').send('Dont shout at me, dess!');
    }
    if(message.content == 'Can I ping you?'){
        member.guild.channels.get('373571542769991681').send('Dont you dare ping me, dess.');
    }
    if(message.content == 'Kongou Dess!'){
        member.guild.channels.get('373571542769991681').send('Kongou what, dess?');
    }
    if (message.mentions.users.has('464722512169795594')){
        member.guild.channels.get('373571542769991681').send('Did you just fucking ping me, dess?');
    }
    if(message.content == 'Who are you?'){
        member.guild.channels.get('373571542769991681').send('Im Kirika, dess!');
    }
    if(message.content == 'Desu!'){
        member.guild.channels.get('456297725223501825').send('That is not the right spelling, dess.');
    }
    if(message.content == 'Say Shirabe'){
        member.guild.channels.get('373571542769991681').send('My love!');
    }
    if(message.content == 'です!'){
        member.guild.channels.get('373571542769991681').send('What the fuck are you saying, dess?');
    }

});

bot.login(process.env.BOT_TOKEN);
