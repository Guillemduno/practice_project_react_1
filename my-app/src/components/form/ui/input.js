import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label for={props.id}>{props.label}</label>
      <input type="text" id={props.id}></input>
    </div>
  );
};

export default Input;
