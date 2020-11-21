import './App.css';
import React from "react";
import BooleanComponent from "./03/BooleanComponent";

function App() {

  return (
      <div>
        <div><b>지루할 때:<BooleanComponent bored/></b></div>
        <div><b>지루할 때:<BooleanComponent/></b></div>
      </div>
  );
}

export default App;
