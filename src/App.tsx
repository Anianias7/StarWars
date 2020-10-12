import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;
