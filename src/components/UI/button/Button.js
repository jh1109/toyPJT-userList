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
