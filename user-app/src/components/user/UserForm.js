import React, { useState } from 'react';
import Button from '../UI/Button';

function UserForm(props) {
    const [name, SetuserName] = useState('');
    const [age, SetAge] = useState('');

    const userNameHandler = (event) => SetuserName(event.target.value);
    const AgeHandler = (event) => SetAge(event.target.value);
    const FormHandler = (e) => {
        e.preventDefault();
        const formData = {

            username: name,
            userAge: age
        }
        props.onSaveUserForm(formData);
        SetuserName('');
        SetAge('');



    };
    return (

        <form onSubmit={FormHandler}>

            <label>UserName</label>
            <input type="text" value={name} onChange={userNameHandler}></input>


            <label>Age(years)</label>
            <input type="number" value={age} onChange={AgeHandler}></input>


            <Button type="submit">Add User</Button>

        </form>

    );

}
export default UserForm;
