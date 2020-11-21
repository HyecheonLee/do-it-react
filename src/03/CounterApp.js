import React, {useState} from 'react';
import Counter from "./Counter2";

const App = () => {
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
      <div>
        <Counter count={count} onAdd={increaseCount}/>
      </div>
  );
};

export default App;
