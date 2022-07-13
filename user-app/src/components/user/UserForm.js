import React, { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function UserForm(props) {
    const [name, SetuserName] = useState('');
    const [age, SetAge] = useState('');
    const [error, SetError] = useState();

    const userNameHandler = (event) => SetuserName(event.target.value);
    const AgeHandler = (event) => SetAge(event.target.value);
    const FormHandler = (e) => {
        e.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            SetError({
                title: "Invalid input",
                message: "Input field required some values!!"
            });
            return;
        }
        if (+age < 1){
            SetError({
                title: "Invalid age",
                message: "Age should be greater than 1 !!!"
            })
            return;
        }

        const formData = {

            username: name,
            userAge: age
        }
        props.onSaveUserForm(formData);
        SetuserName('');
        SetAge('');



    };

    const errorHandler=()=>{
        SetError(null);
    }
    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <form onSubmit={FormHandler}>

                <label>UserName</label>
                <input type="text" value={name} onChange={userNameHandler}></input>


                <label>Age(years)</label>
                <input type="number" value={age} onChange={AgeHandler}></input>


                <Button type="submit">Add User</Button>

            </form>
        </div>

    );

}
export default UserForm;
