import React, { Component } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greet from './components/func.components'
import reactLogo from './assets/react.svg'
import heroImg from   './assets/hero.png'
import './App.css'
import Hello from './components/hello'
import Welcome from './components/Welcome'
import Message from './components/mesaage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/message" element={<Message />} /> 

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
