const express = require('express')
const app = express()
const port = 3000
const db = require('./database.js');

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/test', (req, res) => {
  let arr = [
    {id: 1,
      avatar: "https://i.imgur.com/BHe2c4o.jpg",
      reviewer: "Roman Emmons",
      stars: 1,
      date: `June 26, 2019`,
      body: "Hey, this is a fake review for a fake book on a fake website!"
    }
  ]
  db.save(arr, () => {
    //
    res.json('saved to the DB')
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))