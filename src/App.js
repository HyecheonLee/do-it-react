import './App.css';
import React from "react";
import ChildComponent2 from "./03/ChildComponent2";

function App() {

  return (
      <div>
        <ChildComponent2 objValue={{age: 20}} requiredStringValue="문자"/>
      </div>
  );
}

export default App;
