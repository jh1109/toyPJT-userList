import React, { useState } from "react";
import UserInfoInputForm from "./components/UserInfoInputForm";
import UserList from "./components/UserList";
import Alert from "./UI/alert/Alert";

function App() {
  const [users, setUsers] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [alertContent, setAlertContent] = useState(null);

  const addUserHandler = (user) => {
    setUsers((addUser) => addUser.concat(user));
  };
  const alertHandler = (boolean) => {
    setInvalid(boolean);
  };
  const alertContentHandler = (title = null, content = null) => {
    setInvalid(true);
    setAlertContent(
      <Alert title={title} content={content} onClose={alertHandler} />
    );
  };
  return (
    <div className="appBackground">
      <div className="app">
        <UserInfoInputForm
          onAddUser={addUserHandler}
          onInvalid={alertContentHandler}
        />
        {users.length > 0 && <UserList list={users} />}
      </div>
      {invalid && alertContent}
    </div>
  );
}

export default App;
