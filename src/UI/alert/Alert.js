import React from "react";
import Button from "../button/Button";

import styles from "./Alert.module.css";

const Alert = ({ title, content, onClose }) => {
  const closeAlertHandler = (e) => {
    if (
      e.target.className.includes("alertBody") ||
      e.target.closest("button")
    ) {
      onClose(false);
    } else return;
  };
  return (
    <div className={styles.alertBody} onClick={closeAlertHandler}>
      <div className={`card ${styles.alertWrapper}`}>
        <div className={styles.alertTitle}>{title}</div>
        <div className={styles.alertContent}>{content}</div>
        <Button className={styles.alertCloseBtn} type="button" value="Okay" />
      </div>
    </div>
  );
};

export default Alert;
