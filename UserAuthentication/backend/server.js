const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const app = express()
app.use(cors())                 //Enable The cors
app.use(express.json())         //Json Format


//Step 1.Connect with Mongodb(Local - Database)
mongoose.connect("mongodb://localhost:27017/UsersManagmenet")

.then(()=> console.log("MongoDB Connected"))
.catch(err=>console.log(err))

//Step 2: Define Schema (Structure of data)

const userSchema =    new    mongoose.Schema({
            name:String,
            email:String,
            password:String,
       })

//Step 3: Model - Collection
           
const User  =    mongoose.model("User" , userSchema)



//Register - 
app.post('/register' , async(req,res)=>{

const {name , email , password } = req.body

if(!name || !email || !password){
    res.json({message:'All Feild must be completed'})
}


//Check The Existing User
const existingUser  = await User.findOne({email})

if(existingUser){
    return res.json({message:'User already exits'})
}

//Hash Password
const hashedPassword = await bcrypt.hash(password , 10)

//Save Data in DB
const newUser = new User({
    name,
    email,
    password:hashedPassword
})

await newUser.save()

res.json({message:'User Registered Sucessfully'})

})

app.listen(3000 , ()=>{
    console.log("http://localhost:3000 Running")

})
