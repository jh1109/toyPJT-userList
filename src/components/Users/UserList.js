import React from "react";
import User from "./User";

import styles from "./UserList.module.css";
const UserList = ({ list }) => {
  return (
    <ul className={`card ${styles.userList}`}>
      {list.map((user) => (
        <li key={user.id}>
          <User name={user.name} age={user.age} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
