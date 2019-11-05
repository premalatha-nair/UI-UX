/** Example of how to parse the url  **/
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello World");
})
 
app.get('/api/courses',(req,res)=>{res.send([1,2,3])
})
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
})
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params)
}) // try api/posts/2001/3  {"year":"2001","month":"1"}

app.listen(port,()=>console.log("listening"));