import express from 'express';
import dotenv from 'dotenv';
import { router as indexRouter } from './routes/index.js';
import { router as gameRouter } from './routes/game.js';
import { router as resultRouter } from './routes/result.js';

const app = express();
const PORT = 1738;

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(`/`, indexRouter);
app.use(`/game`, gameRouter);
app.use(`/result`, resultRouter);


const server = app.listen(PORT, () => {
    const SERVERHOST = server.address().address
    const SERVERPORT = server.address().port;

    console.log(`Listening at: http://${SERVERHOST}:${SERVERPORT}`);
});

export default app;
