import React from "react";
import ReactDOM from "react-dom";
// import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App";

// ReactDom.render(<App />, document.querySelector('#root'))

//==============================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
