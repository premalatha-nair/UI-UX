/*** Now let's have some real values for courses **/

/* Also include error handling ***/

/*** localhost:3000/api/courses/1 will give a result */
/*** localhost:3000/api/courses/10 will give an error as expected */

const express = require('express')
const app = express()
const port = 3000
const courses = [
                {id : 1, name: 'computer Science'},
                {id:2, name: 'Physics'},
                {id:3, name : 'Mathematics'}
];

app.get('/',(req,res)=>{
    res.send("Hello World");
})
 
app.get('/api/courses',(req,res)=>{res.send(courses)
})
app.get('/api/courses/:id',(req,res)=>{
    let no = req.params.id;
    console.log(no);
    let  course = courses.find(c=>c.id===parseInt(no))
    if (!course) res.status(404).send("Course not found");
    console.log(course)
    res.send(course);
})
 //api/courses/1 will give a result
 //api/courses/10 will give an error
app.listen(port,()=>console.log("listening"));