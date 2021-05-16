const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT ?? 3333

app.use('/static', express.static(path.resolve(__dirname, 'client', 'static')))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(port, () => console.log('Server listening on port ' + port))