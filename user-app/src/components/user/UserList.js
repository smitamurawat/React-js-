import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';

function UserList(props)
{
    console.table(props.users);
    return(
        <Card className = {classes.users}>
            <ul>
                {
                    props.users.map((users)=>{
                        return(
                            <li>{users.username} ({users.userAge} year old)</li>
                        )
                    })
                }
            </ul>
        </Card>
    );
}

export default UserList;