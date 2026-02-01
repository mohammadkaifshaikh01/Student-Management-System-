const express = require('express')
const app = express()
const PORT = 5000
const web = require('./routes/web.js')


app.use('/api',web)
//Sever Setup
app.listen(PORT,()=>{
   console.log(`Server Is Running On Port : ${PORT}`)
})