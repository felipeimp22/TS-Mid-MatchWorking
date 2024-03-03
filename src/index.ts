import dotenv from 'dotenv';
import Server from './server';

dotenv.config();

Server.listen(process.env.APP_PORT);