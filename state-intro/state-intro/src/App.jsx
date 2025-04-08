import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(1000);
  let a = 5;
  return (
    <>
      <div>The count is {count}</div>
      <button
        onClick={() => {
          setCount((a = a + 1));
        }}
      >
        Update count
      </button>
    </>
  );
}

export default App;
