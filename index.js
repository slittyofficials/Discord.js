const fs = require('fs')
const Discord = require('discord.js')
const path = require('path')

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']})

client.on('ready', () => {
	client.user.setActivity({name:"2021", type:"PLAYING"})
})

client.on('messageCreate', (message) => {
	
})

client.login('ODYzNTAzMDk2MTY4MTg1ODU3.YOn17Q.p7WPKoM9ogFQrwauPpgFmJQMRBU')