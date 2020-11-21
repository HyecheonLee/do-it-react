import './App.css';
import React, {useState} from "react";
import Counter from "./03/Counter";
import NewCounter from "./03/NewCounter";

function App() {
  const [count, setCount] = useState(10);
  const resetCount = () => {
    setCount(count + 10);
  }
  return (
      <div>
        <Counter count={count}/>
        <NewCounter count={count}/>
        <button onClick={resetCount}>
          {count + 10}
        </button>
      </div>
  );
}

export default App;
