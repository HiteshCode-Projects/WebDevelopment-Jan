// import React from "react";


// function App(){

// let count = 0
// //  count = count + 1 
// //Value Updated Manually

// function Increase(){
//   count = count + 1
// }


// console.log(count)

// return(
// <div>
// <h1>The value of count is  {count}  </h1>
// <button onClick={Increase()}>Click Me</button>
// </div>
// )


// }

// export default App




///Example 2 : 
// useState - SPECAIL VARIABLE THAT REMEMEBERS VALUES AND UPDATE SCREEN AUTOMATICALY
// IT IS ASLO KNOW HAS A HOOK IN REACT
//SYNATX - const [count    , setVariableName- it is a fucntion ]= useState(Inital Value of the Variable)
// - import {useSate} - Mandataory

// import React , {useState} from "react";

// function App(){

//   const [likes , setLikes] = useState(0)

//   function increaseLike(){
//        setLikes(likes + 1)
//   }

//   return(
//     <div>
//        <h2>Likes :{likes} </h2>
//        <button onClick={increaseLike}>💖Like</button>
//     </div>
//   )
// }
// export default App

//Example 3 - Show/Hide Password
// import { useState } from "react";

// function App(){

//   const [show , setShow] = useState(false)

//   return(
//     <div>

//     <input type={show ? "text" : "password"}     />  

//     <button onClick={ ()=>setShow(!show)  }>Show/Hide</button> 

//     </div>
//   )
// }
// export default App



import { useState } from "react";

function App(){

  const [quant , setQuant] = useState(0)
  
  return(
    <div>

     <h1>Qunatity  {quant} </h1>
     <button onClick={()=> setQuant(quant + 1) }>   ➕</button>
     <button onClick={()=> setQuant(quant - 1) }>   ➖</button>
    
    </div>
  )
}
export default App

