import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form";

function App() {
  const [username, setUsername] = useState("");

  const saveUser = (user) => {
    console.log(user.username);
    console.log(user.age);
    setUsername(user.username);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form onSaveUser={saveUser}></Form>
        <p>{username}</p>
      </header>
    </div>
  );
}

export default App;
