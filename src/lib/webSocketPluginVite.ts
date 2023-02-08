import type { ServerOptions } from 'socket.io';
import type { PluginOption } from 'vite';
import injectSocketIO from '../../socketIoHandler.js';

export const webSocketServer = {
    name: 'webSocketServer',
    configureServer(server : {httpServer : Partial<ServerOptions>}) {
        injectSocketIO(server.httpServer);
    }
} as PluginOption;