import React from "react";

import styles from "./User.module.css";

const User = ({ name, age }) => {
  return (
    <div className={styles.userCard}>
      {name} ({age} years old)
    </div>
  );
};

export default User;
