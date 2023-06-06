import React, { useState } from "react";
import UserInfoInputForm from "./components/UserInfoInputForm";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((addUser) => addUser.concat(user));
  };
  console.log(users);
  return (
    <div className="app">
      <UserInfoInputForm onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
