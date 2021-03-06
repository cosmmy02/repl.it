const Discord = require('discord.js');
const keepAlive = require('./server.js');

const client = new Discord.Client();
const prefix = process.env.prefix;

// Tu código aquí

keepAlive();
client.login(process.env.token);