import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';

import App from "./Components/App";
import "./index.css";
import { QuizProvider } from "./Context/QuizContext";

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);

// ///
