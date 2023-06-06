import React, { useState } from "react";

import styles from "./UserInfoInputForm.module.css";

const UserInfoInputForm = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    const user = { id: Math.random().toString(), name: userName, age: +age };
    onAddUser(user);
    setUserName("");
    setAge("");
  };
  return (
    <form
      className={`card ${styles.userInfoInputForm}`}
      onSubmit={addUserHandler}
    >
      <label>Username</label>
      <input type="text" value={userName} onChange={userNameChangeHandler} />
      <label>Age (Years)</label>
      <input type="text" value={age} onChange={ageChangeHandler} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInfoInputForm;
