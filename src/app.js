const Discord = require('discord.js')
const { TOKEN } = require('./config')

if (!TOKEN) {
    throw new Error('Token not found. Check your .env file or environment variables on your server')
}

const app = new Discord.Client()

// Message dispatcher
app.on('message', require('./app-event-handlers/command-dispatcher'))

// new server salute service
app.on('guildCreate', require('./app-event-handlers/on-guild-create'))

app.on('guildDelete', require('./app-event-handlers/on-guild-delete'))

app.on('ready', async () => {
    console.log(`\nBot ${app.user.username} has lauched!`)
    const link = await app.generateInvite({
        permissions: ['ADD_REACTIONS', 'SEND_MESSAGES', 'SPEAK', 'ADD_REACTIONS', 'CONNECT']
    })
    console.log('Link to invite bot to your guild:')
    console.log(link, '\n')
})

module.exports.fireApp = async function () {
    await app.login(TOKEN)
    return app
}
