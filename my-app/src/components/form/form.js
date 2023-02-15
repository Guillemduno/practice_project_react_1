import React, { useState } from "react";
import styles from "./form.module.css";
import Button from "./ui/button";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const saveUsername = (event) => {
    setUsername(event.target.value);
  };

  const saveAge = (event) => {
    setAge(event.target.value);
  };

  const saveForm = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      age: age,
    };

    props.onSaveUser(user);

    setUsername("");
    setAge("");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={saveForm}>
        <div className={styles.input}>
          <label for="username">Username</label>
          <input type="text" id="username" onChange={saveUsername}></input>
        </div>
        <div className={styles.input}>
          <label for="age">Age</label>
          <input type="text" id="age" onChange={saveAge}></input>
        </div>
        <Button label="Add User"></Button>
      </form>
    </div>
  );
};

export default Form;
