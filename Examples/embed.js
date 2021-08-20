const fs = require('fs')
const Discord = require('discord.js')

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']})

client.on('ready', () => {
	client.user.setActivity({name:"2021", type:"PLAYING"})
})

client.on('messageCreate', (message) => {
	if (message.content == `embed`){
		const Embed = new Discord.MessageEmbed()
		.setColor("FFFFFF")
		.setTitle("Example")
		.setDescription("Embed")
		.setFooter("Discord.js @v13")
		message.channel.send({ embeds: [Embed] })
	}
})

client.login('TOKEN')
