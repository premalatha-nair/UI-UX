/* INPUT Validation for the post methods   */
/* For this we can use a package called joi */
/* npm i joi in your directory */

const Joi = require("joi");//Joi is a class
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());



const courses = [
                {id : 1, name: 'computer Science'},
                {id:2, name: 'Physics'},
                {id:3, name : 'Mathematics'}
];



app.post('/api/courses/',(req,res)=>{

    let course = {
    id:courses.length+1, // this can be created from DB 
    name:req.body.name
    //here we need to write validation for the input
    //ignore if the value passed is not right
    }
    let schemaforjoi  = {
        name:Joi.string().min(3).required()
    }
    let result = Joi.validate(req.body,schemaforjoi)
    console.log(result);
    /* A calid course object will give a value as
    the input , else there will be a validation error */

    




    courses.push(course);
res.send(course); //sending the added id back to client
    });



/* We need to define the schema for Joi */

/* Use Chrome postman to test this . Use postman to post a 
json file which include one course {"name":"English"} 
This will be displayed in courses on browser*/



app.get('/',(req,res)=>{
    res.send("Hello World");
})
/*app.get('/api/courses',(req,res)=>{
    res.send("Hello Wonnnrld");
})
*/
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
app.listen(3002,()=>console.log("listening"));