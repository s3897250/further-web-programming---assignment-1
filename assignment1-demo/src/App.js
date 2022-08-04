import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent"
import Footer from "./components/Footer";


function App() {

    // Functions to support conditional rendering which
    // return specific pages from user-defined components

    // State: bools could be used to guide conditional rendering.
    // onClick jsx-function: used to set bool




  return (

    <div className="body">
      

      <Header></Header>

      <MainContent></MainContent>

      <Footer></Footer>

      
    </div>

  );
}

export default App;
