'use strict';
import routes from './api';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8001
});

// Add the route
server.route(routes);

// Start the server
async function start() {

    try {
        await server.start();
        server.events.on('response', function (request) {
            console.log(`method=${request.method}, path=${request.url.path}, responseTimeMs=${request.info.responded - request.info.received}, statusCode=${request.response.statusCode}`);
        });
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();