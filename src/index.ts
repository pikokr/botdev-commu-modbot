import { CommandHandler, ListenerHandler } from "discord-akairo";
import { Message } from "discord.js";
import { MessageEmbed } from "discord.js";
import config from "../config.json";
import Client from "./structs/Client";

const client = new Client()

client.login(config.token).then(()=>{
    console.log(`Login: ${client.user!.tag}`)
})

Message.prototype.embed = function() {
    const em = new MessageEmbed()
    em.setFooter(this.author.tag,this.author.avatarURL({dynamic: true})!)
    return em
}

declare module 'discord.js' {
    interface Client {
        commandHandler: CommandHandler
        listenerHandler: ListenerHandler
    }
    interface Message {
        embed: () => MessageEmbed
    }
}
