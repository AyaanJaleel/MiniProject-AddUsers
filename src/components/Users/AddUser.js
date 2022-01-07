import React, { useState } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import Errormodal from '../UI/ErrorModal';

function AddUser(props){

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    function insertUser(event){
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (bigger than 0).'
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    function usernameHandler(event){
        setEnteredUserName(event.target.value);
    }
        
    function ageHandler(event){
        setEnteredAge(event.target.value);
    }

    function errorHandler(){
        setError(null);
    }

    return(
        <div>
            {error && <Errormodal title={error.title} message={error.message} onConfirm={errorHandler}></Errormodal>} 
            <Card className={classes.input}>
                <form onSubmit={insertUser}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={usernameHandler}></input>

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageHandler}></input>

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
        
    );
   
};

export default AddUser;