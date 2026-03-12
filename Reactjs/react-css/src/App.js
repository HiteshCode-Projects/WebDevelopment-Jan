import React from "react";
import LoginPage from "./Login";

function App() {
   //Js Part
  var username = "John"

  function showAlert(){
    alert('Hii I am from React')
  }

  return (
    //Html Part
  <div>

   <h1 style={{ color:'red' , textAlign:'center' , fontFamily:'cursive' , border: '2px solid black', backgroundColor:'beige' }} >Welcome To React</h1>

   <LoginPage />

   <h2>My Name is {username} </h2>
   <button onClick={showAlert}>POP up</button>

  </div>   
  );
}

export default App;
