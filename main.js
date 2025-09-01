const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('you have hit /')
  res.send(
    'hello there',
    process.env.DB_URL,
    process.env.JWT_SECRET,
    process.env.MY_SECRET
  )
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})

// adding comment to test new docker image build
// 1
// 2
