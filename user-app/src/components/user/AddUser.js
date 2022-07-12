import React from 'react';
import Card from '../UI/Card'
import UserForm from './UserForm';
import classes from './AddUser.module.css';
function AddUser(props)
{
    const AddUserHandler=(data)=>{
         const userArray = {...data,id : Math.random().toString(36)}
    
        props.getUserInfo(userArray);
        }
    return(
        <Card className={classes.input}>
            <UserForm onSaveUserForm={AddUserHandler}></UserForm>
        </Card>
    )

}
export default AddUser;
