import React from "react";
import Button from "../button/Button";

import styles from "./Alert.module.css";

const Alert = ({ title, content, onClose }) => {
  return (
    <div className={styles.alertBody}>
      <div className={`card ${styles.alertWrapper}`}>
        <div className={styles.alertTitle}>{title}</div>
        <div className={styles.alertContent}>{content}</div>
        <Button
          className={styles.alertCloseBtn}
          type="button"
          value="Okay"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Alert;
