import React from "react";

import styles from "./Button.module.css";

const Button = ({
  className,
  type,
  value,
  onClick = (boolean) => {
    return;
  },
}) => {
  const closeBtnHandler = () => {
    onClick(false);
  };
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={closeBtnHandler}
    >
      {value}
    </button>
  );
};

export default Button;
