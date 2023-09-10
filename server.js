const express = require('express')
const PORT = 8080;
const HOST = '0.0.0.0'

var count=0;

const app = express()
app.get('/', (req, res)=>{
  count+=1
  res.send(`current visits: ${count}`)
})

app.listen(PORT, HOST, ()=>{
  console.log(`Running on http://${HOST}:${PORT}`)
})