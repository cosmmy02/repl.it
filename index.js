const Discord = require('discord.js');
const keepAlive = require('./server.js');

const client = new Discord.Client();

keepAlive();
client.login(process.env.token);