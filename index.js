require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Importando os módulos que criamos
const welcomeExitModule = require('./welcomeexit');
const playgroundModule = require('./playground');
const economiaModule = require('./economia');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

client.once('ready', () => {
    console.log(`✅ Bot online como ${client.user.tag}!`);
    client.user.setActivity('Cuidando do servidor!', { type: 3 });
});

// Iniciando os módulos e passando o "client" para eles
welcomeExitModule(client);
playgroundModule(client);

client.login(process.env.TOKEN);