import React, { useRef, useState } from "react";

import styles from "./UserInfoInputForm.module.css";
import Button from "../UI/button/Button";

const UserInfoInputForm = ({ onAddUser, onInvalid }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const userNameInputEl = useRef(null);

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      onInvalid(true);
      return;
    }
    const user = { id: Math.random().toString(), name: userName, age: +age };
    onAddUser(user);
    setUserName("");
    setAge("");
    userNameInputEl.current.focus();
  };
  return (
    <form
      className={`card ${styles.userInfoInputForm}`}
      onSubmit={addUserHandler}
    >
      <label>Username</label>
      <input
        type="text"
        value={userName}
        onChange={userNameChangeHandler}
        ref={userNameInputEl}
      />
      <label>Age (Years)</label>
      <input type="text" value={age} onChange={ageChangeHandler} />
      <Button type="submit" value="Add User" />
    </form>
  );
};

export default UserInfoInputForm;
