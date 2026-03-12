import React from "react";
import ProductCards from "./ProductCard";

function App(){


  return(
    //HTML CODE-Structure
      <div>

      <h1>Welcome To React</h1>
      <p><mark>Command: </mark> <del>npm</del> <ins>npx create-react-app</ins>  </p> 
      <button>Login</button>
       
       <ProductCards  />
       <ProductCards />
       <ProductCards />

      </div>

  )

}

export default App