require('dotenv').config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', (message) =>{
    if (message.author.bot) {
        return;
    }

    if (message.content === 'привет') {
        message.reply('дарова');
    }
});

client.on('voiceStateUpdate', (vc) => {
    console.log(vc);
});

client.login(process.env.TOKEN);



