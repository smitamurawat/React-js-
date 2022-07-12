import React from 'react';
import UserForm from './UserForm';
function AddUser(props)
{
    const AddUserHandler=(data)=>{
         const userArray = {...data,id : Math.random().toString(36)}
    
        props.getUserInfo(userArray);
        }
    return(
        <div>
            <UserForm onSaveUserForm={AddUserHandler}></UserForm>
        </div>
    )

}
export default AddUser;
