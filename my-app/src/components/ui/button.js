import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <div className={styles.button}>
      <button type="submit">{props.label}</button>
    </div>
  );
};

export default Button;
