import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import List from "./components/form/list";

function App() {
  const [users, setUsers] = useState([]);

  const saveUser = (user) => {
    const myUser = {
      id: Math.random().toString(),
      nom: user.username,
      edad: user.age,
    };

    setUsers((users) => {
      return [myUser, ...users];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form onSaveUser={saveUser}></Form>
        {users.length > 0 && <List listOfUsers={users}></List>}
      </header>
    </div>
  );
}

export default App;
