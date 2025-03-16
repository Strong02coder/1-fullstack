import express from 'express';
const app = express()
const port = 3006

app.get('/', (req, res) => {
  res.send('Teri Maa Ki Chut')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
