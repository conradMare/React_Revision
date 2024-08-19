import React from "react";
import Form from "./components/Form";
import "./App.css";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form 
        isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;
