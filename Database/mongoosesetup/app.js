const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())  //Middleware to handle JSon

//1. Connect with Local MongoDB Database
//"mongodb://localhost:27017/Database_Name"

mongoose.connect("mongodb://localhost:27017/StudentManagement")

.then(()=>console.log("Connected To MongoDB")   )
.catch(err=>console.error("MongoDB Connection failed " , err))

//Define a Schema / Blueprint of the data which we want to stre in Collection
   const studentSchema =     new  mongoose.Schema({

    name:String ,
    age:Number,
    grade:String

})

//Collection - Model 

    const Student    =    mongoose.model('student', studentSchema)

//Route/API/URL - Express

//Added
app.post('/add-student' , async(req,res)=>{

 const newStudent =  new  Student(req.body)
await newStudent.save();
res.send("Student Register sucessfully ")


})

//Details
app.get('/students' , async(req,res)=>{

const students = await Student.find()
res.json(students)

})

app.listen(3000 , ()=>{
    console.log("Server running at http://localhost:3000")
})

