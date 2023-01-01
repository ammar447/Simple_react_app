 import React , { useState} from 'react';
 import './App.css';
 import AddUser from './components/Uesers/AddUser.js';
 import UserList from './components/Uesers/UserList.js';
function App() {
  const [usersList,SetUsers] = useState([]);
  const ChangeUserList =(uName,uAge) => {
    SetUsers(prevList => {
      return [...prevList,{name:uName,age:uAge , id : Math.random().toString()}]
    });
  }
  return (
    <div className="App">
       <AddUser onAddUser={ChangeUserList} /> 
       <UserList users={usersList} />
    </div>
  );
}

export default App;
