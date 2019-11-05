/***  Diplay an array at localhost:3000/api/courses */
/***  Diplay Hello World at localhost:3000 */

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/api/courses',(req,res)=>{res.send([1,2,3])
})

app.listen(port,()=>console.log("listening"));