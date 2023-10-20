import cors from 'cors';
import dotenv from 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import * as routes from '../../routes';

dotenv;
const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(helmet());

app.use(cors(corsOptions));

app.use(express.json());

Object.keys(routes).forEach(key => app.use(`/api/${key}`, routes[key]));

export default app;
