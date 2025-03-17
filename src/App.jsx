import { useState } from "react";

import "./App.css";
import "./Components/ReactCode/Basic"
import Basic from "./Components/ReactCode/Basic";
import "./Components/ReactCode/Login"
import Login from "./Components/ReactCode/Login"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main />
      <Login />
      
    </>
  );
}

export default App;
