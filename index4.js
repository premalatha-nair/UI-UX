/* Now try http:http://localhost:3000/api/courses/1  */
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello World");
})
 
app.get('/api/courses',(req,res)=>{res.send([1,2,3])
})
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)  //returns the id 
})

app.listen(port,()=>console.log("listening"));