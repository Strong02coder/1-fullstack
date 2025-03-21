import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT || 4006;

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
