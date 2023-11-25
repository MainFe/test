// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

//////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/dog', (req, res) => {
//   res.json({'sound': '멍멍'})
// })

// app.get('/cat', (req, res) => {
//   res.send('Hello Cat!')
// })

// app.get('/user/:id', (req, res) => {
//   const p = req.params
//   console.log(p)
//   const q = req.query
//   console.log(q)

//   res.send({'userid': p.id})
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
let cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
  const { name } = req.params

  if(name == 'dog'){
    res.json({'sound': '멍멍'});
  }
  else if(name == 'cat') {
    res.send({'sound': '야옹'});
  }
  else if(name == 'pig') {
    res.send({'sound': '꿀꿀'});
  }
  else {
    res.send({'sound': '알수없음'});
  }
})

app.listen(port);