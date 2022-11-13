import React from "react";
import imgHeader from "../src/assets/image/upateheart.png";
import "./App.css";

function App() {
  return (
    <div className="Title">
      <header className="Title-header">
        <img src={imgHeader} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
      </header>
    </div>
  );
}

export default App;
