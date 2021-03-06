// Type definitions for discord-fantasy-music-bot
// Project: Shyrlonay - Fantasy Music Bot
// Definitions by: Dmitry Lyakhovich <faradayby@gmail.com>

interface CommadHandlerParams {
    message: import('discord.js').Message
    guild: import('../guild-session').default
    args: string[]
}

type Stream = string | import('discord.js').VoiceBroadcast | import('stream').Readable

interface Track {
    title: string
    getStream(): Promise<Stream>
    meta?: [string, string][]
}

interface Slot {
    name?: string
    value: string
}

type Slots = Map<number, Slot>
