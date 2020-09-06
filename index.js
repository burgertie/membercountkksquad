const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("active")
    const guild = client.guilds.cache.get('567440875597070356')

    const memberCountChannel = guild.channels.cache.get('752203464158871654')
    const memberCount = guild.members.cache.size
    memberCountChannel.setName(`MEMBER COUNT: ${memberCount}`)
})

client.login(process.env.token);