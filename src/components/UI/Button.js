/* 내가 작성한 <Button>
import React from "react";

import styles from "./Button.module.css";

const Button = ({ className, type, value }) => {
  return (
    <button className={`${styles.button} ${className}`} type={type}>
      {value}
    </button>
  );
};

export default Button;

*/
import React from "react";

import classes from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button
      type={type || "button"}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
