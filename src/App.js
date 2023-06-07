import React, { useState } from "react";
import UserInfoInputForm from "./components/UserInfoInputForm";
import UserList from "./components/UserList";
import Alert from "./UI/alert/Alert";

function App() {
  const [users, setUsers] = useState([]);
  const [invalid, setInvalid] = useState(false);

  const addUserHandler = (user) => {
    setUsers((addUser) => addUser.concat(user));
  };
  const alertHandler = (boolean) => {
    setInvalid(boolean);
  };
  return (
    <div className="appBackground">
      <div className="app">
        <UserInfoInputForm
          onAddUser={addUserHandler}
          onInvalid={alertHandler}
        />
        {users.length > 0 && <UserList list={users} />}
      </div>
      {invalid && (
        <Alert
          title="Invalid input"
          content="Please enter a valid name and age (non-empty values)."
        />
      )}
    </div>
  );
}

export default App;
