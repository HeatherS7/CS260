const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Here is the response to your POST!')
})

app.put('/', (req, res) => {
  res.send('I am updated.')
})

app.delete('/', (req, res) => {
  res.send('All my memories are gone. Happy now?')
})

app.get('/secret', (req, res) => {
  res.send('Secretly, I\'m a little bit naive')
})

app.get('/api/user/1', (req, res) => {
  res.send({
    name: "Amy Caprietti",
    avatar: "/avatars/supergirl.jpg",
    role: "admin"
  })
})

app.listen(3000, () => console.log('Server listening on port 3000!'))