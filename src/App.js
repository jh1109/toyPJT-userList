import React, { useState } from "react";
import UserInfoInputForm from "./components/UserInfoInputForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((addUser) => addUser.concat(user));
  };
  return (
    <div className="app">
      <UserInfoInputForm onAddUser={addUserHandler} />
      {users.length > 0 && <UserList list={users} />}
    </div>
  );
}

export default App;
