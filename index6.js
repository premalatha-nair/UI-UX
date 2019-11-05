/*** Url parsing sort by name  ***/

/*** api/posts/2018/1?sortBy=name ***/

const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello World");
})
/*app.get('/api/courses',(req,res)=>{
    res.send("Hello Wonnnrld");
})
*/
app.get('/api/courses',(req,res)=>{res.send([1,2,3])
})
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
})
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query);
}) //api/posts/2018/1

//api/posts/2018/1?sortBy=name

app.listen(port,()=>console.log("listening"));