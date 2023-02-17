import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import List from "./components/form/list";

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
        <List></List>
      </header>
    </div>
  );
}

export default App;
