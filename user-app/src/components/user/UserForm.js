import React,{useState} from 'react';

function UserForm(props)
{
    const[name,SetuserName]= useState('');
    const[age,SetAge] = useState('');

    const userNameHandler =(event)=>SetuserName(event.target.value);
    const AgeHandler =(event)=>SetAge(event.target.value);
    const FormHandler=(e)=>{
        e.preventDefault();
        const formData = {
    
            username : name,
            userAge :age
        }
       props.onSaveUserForm(formData);
       SetuserName('');
       SetAge('');

    
    
    };
    return(
       
            <form  onSubmit={FormHandler}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={name} onChange={userNameHandler}></input>
                </div>
                <div>
                    <label>Age(years)</label>
                    <input type="number" value={age} onChange={AgeHandler}></input>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            </form>
        
    );

}
export default UserForm;
