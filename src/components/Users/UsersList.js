/* 내가 작성한 코드
import React from "react";
import User from "./User";

import styles from "./UsersList.module.css";
const UsersList = ({ list }) => {
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

export default UsersList;
*/
import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
