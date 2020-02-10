const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const hanSolo = require('./hanSolo')

const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())

app.get('/hanSolo', (req, res) => {
  return res.send(hanSolo)
})

app.listen(port, () => {
  console.log('listening...')
})
