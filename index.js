import * as http from 'http';

import app from './app/servidor.js';

const httpServer = http.createServer(app);

httpServer.listen(app.get("PORT"), "0.0.0.0", () => {
    console.log(`Server running -Port ${app.get("PORT")}`)
}); 