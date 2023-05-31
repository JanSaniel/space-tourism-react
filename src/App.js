import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {

  return (
    <div>
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
