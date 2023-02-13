import React from "react";
import styles from "./form.module.css";
import Button from "./ui/button";
import Input from "./ui/input";

const Form = () => {
  return (
    <div className={styles.form}>
      <Input id="name" label="Username"></Input>
      <Input id="age" label="Age (Years)"></Input>
      <Button label="Add User"></Button>
    </div>
  );
};

export default Form;
