import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express()

app.use(cors(
  {
    origin: 'http://localhost:3006',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }
));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3006;

app.get('/', (req, res) => {
  res.send('My full Stack Project')
})

app.get('/apurva', (req, res) => {
  res.send('Apruva Agrawal')
})

app.get('/aryan', (req, res) => {
  res.send('Aryan Agrawal')
})

console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
