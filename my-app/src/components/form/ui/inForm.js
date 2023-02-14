import React from "react";
import styles from "./inForm.module.css";

const Inform = (props) => {
  return (
    <div className={styles.input}>
      <label for={props.id}>{props.label}</label>
      <input type="text" id={props.id}>
        {props.value}
      </input>
    </div>
  );
};

export default Inform;
