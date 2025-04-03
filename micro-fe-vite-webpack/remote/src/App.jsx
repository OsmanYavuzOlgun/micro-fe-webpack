import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import useCount from "./store";
import HeaderWp from "wp_host/HeaderWp";
import Dummy from "wp_host/Dummy";

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <h1>VITE SCREEN</h1>
      <Button />
      <Dummy />
      <HeaderWp />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
