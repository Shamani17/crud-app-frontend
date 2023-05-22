import React,{Component} from "react";
import ReactDOM from "react-dom/client";
import NavBar from './components/NavBar';
import Code from './components/Code';
import All from './components/All';
import Add from './components/Add';
import Edit from'./components/Edit';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Code />}/>
        <Route path="/all" element={<All />}/>
        <Route path="/add" element={<Add />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </Router>
  );
}

export default App;
