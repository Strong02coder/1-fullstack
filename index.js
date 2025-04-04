import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';

// Importing all routes
import userRoutes from '../routes/user_routes.js';

dotenv.config();

const app = express()

app.use(cors(
  {
    origin: process.env.BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }
));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('My full Stack Project')
})

app.get('/apurva', (req, res) => {
  res.send('Apruva Agrawal')
})

app.get('/aryan', (req, res) => {
  res.send('Aryan Agrawal')
})

// connect to database
db();

// user routes
app.use('/api/v1/user', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
