import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <div className=" bg-home-mobile md:bg-home-desktop ts:bg-home-tablet bg-no-repeat bg-cover">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route exact path='/destination' element={<Destination/>}/> 
        <Route exact path='/crew' element={<Crew/>}/> 
        <Route exact path='/technology' element={<Technology/>}/> 
      </Routes>
       
       
       
    </div>
  );
}

export default App;
