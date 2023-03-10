import { Server } from 'socket.io';

/**
 * @param {Partial<import("socket.io").ServerOptions> | undefined} server
 */
export default function injectSocketIO(server) {
    const io = new Server(server,{cors : {origin : "http://127.0.0.1:3000"}});

    io.on('connection', (socket) => {
        let username = `User ${Math.round(Math.random() * 999999)}`;
        socket.emit('name', username);
        console.log(username)

        socket.on('message', (message) => {
            io.emit('message', {
                from: username,
                message: message,
                time: new Date().toLocaleString()
            });
        });
    });

    console.log('SocketIO injected');
}