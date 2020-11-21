import './App.css';
import React from "react";
import ChildProperty from "./03/ChildProperty";

function App() {

  return (
      <div>
        <ChildProperty>
          <div><span>자식노드</span></div>
        </ChildProperty>
      </div>
  );
}

export default App;
