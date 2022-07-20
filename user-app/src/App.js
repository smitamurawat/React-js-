import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import AddUser from './components/user/AddUser';
import UserList from './components/user/UserList';

function App() {
  const [userList,setUserList]=useState([]);
  const AddUserInfoHandler = (userInfo) => {
    setUserList((prevuserList)=>{
      return[userInfo,...prevuserList];
    });
  }


  return (
    <div>
    <AddUser getUserInfo={AddUserInfoHandler}></AddUser>
    <UserList users={userList}></UserList>
   

    </div>
  );
}

export default App;
