import injectSocketIO from './socketIoHandler.js';

export const webSocketServer = {
    name: 'webSocketServer',
    /**
     * @param {{ httpServer: Partial<import("socket.io").ServerOptions> | undefined; }} server
     */
    configureServer(server) {
        injectSocketIO(server.httpServer);
    }
};