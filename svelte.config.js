import adapter from '@sveltejs/adapter-node';
import { webSocketServer } from './src/lib/webSocketServer.js';

const config = {
	kit: {
		adapter: adapter(),
    vite: {
      plugins: [webSocketServer],
    },
	}
};

export default config;
