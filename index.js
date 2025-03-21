import express from 'express';
const app = express()
const port = 3006

app.get('/', (req, res) => {
  res.send('My full Stack Project')
})

app.get('/apurva', (req, res) => {
  res.send('Apruva Agrawal')
})

app.get('/aryan', (req, res) => {
  res.send('Aryan Agrawal')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
