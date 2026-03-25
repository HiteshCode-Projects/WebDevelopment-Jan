//Step 1 : Import the modules
const express = require('express')

 const app =   express()

 //Express will Create - API / URL / Routh(Path)
 //  MEthods of Communication - get method : Get the data from server 

 app.get('/login' , (req,res)=>{

res.send('Fill the form to Login')

 })


app.get('/', (req, res) => {
res.json({ message: 'Welcome to my API!' });
});



// GET route — returns a list of users
app.get('/users', (req, res) => {

const users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
];

res.json(users);
});






 //Start The Server
 app.listen(3000,()=>{
    console.log('Server Running on http://localhost:3000')
 })

