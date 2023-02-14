import React from "react";
import styles from "./form.module.css";
import Button from "./ui/button";
import Inform from "./ui/inForm";

const Form = () => {
  const saveForm = (event) => {
    event.preventDefault();
    console.log("button clicked");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={saveForm}>
        <Inform id="name" label="Username"></Inform>
        <Inform id="age" label="Age (Years)"></Inform>
        <Button label="Add User"></Button>
      </form>
    </div>
  );
};

export default Form;
