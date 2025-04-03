import React from "react";
import ReactDOM from "react-dom/client";

import ButtonModule from "remote/Button";
import HeaderModule from "remote/Header";
const Button = ButtonModule.default;
const Header = HeaderModule.default;

console.log(Header);

import "./index.css";

const App = () => (
  <div className="container">
    <div className="first-header">WEBPACK SCREEN</div>
    <Header />
    <div>Name: wp-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <Button />
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
