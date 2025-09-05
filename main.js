const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('hey, you have hit /')
  res.send('hello there' + process.env.DB_URL + process.env.JWT_SECRET)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
