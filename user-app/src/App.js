import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import AddUser from './components/user/AddUser';

function App() {
  const [userList,setUserList]=useState([]);
  const AddUserInfoHandler = (userInfo) => {
  console.log('In app',userInfo);
 
  }


  return (
    <div>
    <AddUser getUserInfo={AddUserInfoHandler}></AddUser>
   

    </div>
  );
}

export default App;
