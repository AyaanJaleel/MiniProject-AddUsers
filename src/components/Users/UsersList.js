import React from 'react';
import Card from '../UI/Card'
import classes from './UsersList.module.css'

function UsersList(props){
    return (
        <Card className={classes.user}>
            <ul className={classes.ull}>
                {props.users.map(user => 
                <li className={classes.lii} key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
                )}
            </ul>
        </Card>
        
    );
}

export default UsersList;