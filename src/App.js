import React, { useState } from "react";
// import UserInfoInputForm from "./components/Users/UserInfoInputForm";
// import UserList from "./components/Users/UserList";
// import Alert from "./UI/alert/Alert";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

/* 내가 작성한 코드
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
*/

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { id: Math.random().toString(), name: uName, age: uAge },
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
