import { useState } from "react";

import "./App.css";
import "./Components/ReactCode/Basic"
import Basic from "./Components/ReactCode/Basic";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main />
      <Basic />
      
    </>
  );
}

export default App;
