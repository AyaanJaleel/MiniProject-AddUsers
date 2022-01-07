import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(Name, Age){
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: Name, age: Age, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
