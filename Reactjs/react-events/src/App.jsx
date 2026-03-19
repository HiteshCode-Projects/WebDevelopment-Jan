import React from "react";

// function App(){

//   function handleClick(){
//     alert('Button Clicked')
//   }

//   return(
//     <div>
//       <button  onClick={handleClick} >Click Me</button>
//     </div>
//   )

// }

// export default App

//Example 2 : Instagram Button
// import { useState } from "react";

// function App(){

//   const [isFollowed , setIsFollowed ] = useState(false)


//   return(
//     <button onClick={()=> setIsFollowed(!isFollowed)}>
//       {isFollowed ? "Following" : "Follow"}
//     </button>
//   )

// }
// export default App


//Example 3 : Live Search
// import { useState } from "react";

// function App(){

// const [text,setText] = useState("")

// return(
//   <div>
//      <input 
//      placeholder="Search......"
//      onChange={ (e)=> setText(e.target.value) }
//      />

//     <h3>You Typed : {text}</h3>
//   </div>
// )

// }

// export default App


//Example 4 : 
import { useState } from "react";

function App(){


  const [color , setColor] = useState("white")

  return(
    <div style={{ backgroundColor:color , height:'100vh'   }}>

     <button onClick={ ()=> setColor("red")   }>Red</button>
     <button onClick={ ()=> setColor("blue")   }>Blue</button>
     <button onClick={ ()=> setColor("green")   }>Green</button>

    </div>
  )
}

export default App