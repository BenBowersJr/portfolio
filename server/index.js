import express from 'express';
import * as http from 'http'
import { Server } from 'socket.io'
import { handler } from '../build/handler.js';
console.log(handler)
const port = 3000
const app = express();
const server = http.createServer(app);

const io = new Server(server)

io.on('connection', (socket) => {
  socket.emit('eventFromServer', 'Hello, World 👋')
})
app.get('/healthcheck', (req, res) => {
  res.end('ok');
});

app.use(handler);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

