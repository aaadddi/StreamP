const express = require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send('Hello this is streamer')
})
app.listen(3000 , ()=> console.log('Server started at port 3000'))