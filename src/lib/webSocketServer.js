// @ts-nocheck
import { Server } from "socket.io";
import { GatewayIntentBits, Client } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()


let key = process.env.DISCORD_KEY
// const myIntents = new IntentsBitField();
// myIntents.add(
//   IntentsBitField.Flags.GuildPresences, 
//   IntentsBitField.Flags.GuildMembers,
//   IntentsBitField.Flags.GuildMessages,
//   IntentsBitField.Flags.GuildMessageReactions,
//   IntentsBitField.Flags.GuildMessageTyping,
//   IntentsBitField.Flags.GuildVoiceStates,
//   IntentsBitField.Flags.Guilds,
//   IntentsBitField.Flags.GuildInvites,
//   IntentsBitField.Flags.GuildMessageReactions,
//   IntentsBitField.Flags.GuildMessageTyping,
//   IntentsBitField.Flags.GuildVoiceStates,
// );
// const client = new Client({ intents: myIntents });
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(key);


client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


// client.on('interactionCreate', async (interaction) => {
//   // this extracts all commands with interactions deals with them
//   if (interaction.options._hoistedOptions) {
//     let options = interaction.options._hoistedOptions
//     if (options.length != 0) for (let command of options) {
//       console.log (`\tCommand: ${command.name}\n\tValue: ${command.value}`)


//     }
//   }
//   await interaction.reply('Message from WebSocket Server');
// });

export const webSocketServer = {
  name: 'webSocketServer',
  configureServer(server) {
    console.log('Launching WebSocket Server');
    const io = new Server(server.httpServer)

    io.on('connection', (socket) => {
      console.log('Connected With Client')
      socket.emit('connected', 'Hello, Your Connected to my WebSocket 👋')
      let personalServer = client.channels.cache.get('1003802710623137973');
      // let castingCouch = client.channels.cache.get('730956755768705078');
      
      socket.on('sendDiscordMessage', async (arg, callback) => {
        let msg = '<@272169999995764738> Message From Portfolio!\n\n' + arg
        await personalServer.send(msg)
        callback('Message Sent!')
      });
    })
  }
}