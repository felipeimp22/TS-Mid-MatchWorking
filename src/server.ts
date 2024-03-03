import routes from './index.routes';
// import './database';
// import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import './global/config/database/index.mongo';

class Server {
    public server;
    constructor() {

        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use(routes);
    }
}
export default new Server().server;