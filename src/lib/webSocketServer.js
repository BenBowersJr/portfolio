// @ts-nocheck
import { Server } from "socket.io";
import { GatewayIntentBits, Client } from 'discord.js'

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
client.login('ODU0NDIyOTQzODk5NzEzNTQ2.GH7r6G.kcOEoPa0envvk1l9zJzFQBgY7Og-c-C1lbAP2g');

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
    const io = new Server(server.httpServer)

    io.on('connection', (socket) => {
      console.log('Connected With Client')
      socket.emit('connected', 'Hello, Your Connected to my WebSocket 👋')
      
      socket.on('Send Discord Message', async (arg, callback) => {
        let channel = client.channels.cache.get('730956755768705078')
        channel.send(arg)
        // console.log(arg);
        // callback('Hello from the server');
      });
    })
  }
}