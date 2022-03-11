import {Request, Response} from 'express';
import axios from 'axios';

const cors = require('cors');
const express = require('express');
const app = express();

require('dotenv').config();

app.use(cors({
  origin: '*'
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Ready to make requests!');
});

app.get('/weather-api', async (req: Request, res: Response) => {
  const {data} = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?zip=${req.query.searchTerm}&appid=${process.env.WEATHER_KEY}`);
  res.send(data);
});

app.listen(3000, () => console.log(`Listening on port 3000...`));