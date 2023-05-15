import React from 'react';
import axios from 'axios';
import Homepage from "./components/homepage/homepage"

import About from "./components/about/about"
import Contact from './components/Contact/Contact';
import Login from "./components/login/login"
// import { GoogleOAuthProvider} from '@react-oauth/google'

import Register from "./components/register/register"
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { useState, useEffect } from 'react';


const App=() => {

  const [ user, setLoginUser] = useState({})
  // const [User, setUser] = useState(null);
  const [data, setData] = useState("");
  const getData=async() => {
    const response=await axios.post("http://localhost:9002/getData");
    setData(response.data);
  }

  


  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
        <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}/>

           {/* <Route exact path="/" element={<Homepage/>}/> */}
          
          <Route path="/login" element={<Login 
              setLoginUser={setLoginUser} /> } />
          
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            
          
        </Routes>
       
      </BrowserRouter>
      </div>
  );
}

export default App;