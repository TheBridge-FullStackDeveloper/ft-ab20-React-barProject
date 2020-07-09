import React from 'react';
import './App.css';
import Visualizer from "./components/visualizer/visualizer.js";
import Header from "./components/header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Visualizer />
    </div> 
  );
}

export default App;
