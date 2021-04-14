/**
 * @type { MessageHandler }
 */
module.exports = async function stop ({ message, guild }) {
    if (guild.isPlaying()) {
        return guild.stop()
    } else {
        return await message.reply('Nothing to stop')
    }
}
