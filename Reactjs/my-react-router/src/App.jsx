// import {React} from 'react';
// import {BrowserRouter , Routes , Route , Link} from "react-router-dom"


// function Home(){
//   return <h1>Home Page</h1>
// }

// function About(){
//   return <h1>About Page</h1>
// }


// function App(){
//   return(
//     <BrowserRouter>
//     <div>
//       <h1>Main Page</h1>

//    <nav>
//     <Link to="/home" >Home</Link>
//     <Link to="/about" >About</Link>
//    </nav>


//       <Routes>

//       <Route path="/home"  element={<Home />}   />
//       <Route path='/about' element={<About />}  />

//      </Routes>

//     </div>
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

function App(){
  return(
    <BrowserRouter>
     
     <Navbar />
    
     <Routes>
    
    <Route path='/' element={<Home />} />

    <Route path='/dashboard' element={<Dashboard />} />

    <Route path='/profile' element={<Profile />} />

     </Routes>

    </BrowserRouter>
  )
}
export default App