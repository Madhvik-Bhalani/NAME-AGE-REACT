import React, { useState } from 'react';

import './UserInput.css'


function UserInput(props) {
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const nameHandler = (e) => {
        setname(e.target.value)
    }
    const ageHandler = (e) => {
        setage(e.target.value)

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            username: name,
            age: age,
            id: Math.round(Math.random() * 10000)
        }


        if (data.age < 0) {
            props.onalert("age must be positive.!", "warning")
            return;

        }
        else if (data.username.length === 0 || data.age.length === 0) {
            props.onalert("plz fill all data before add.!", "warning")
            return;
        }
        else {
            props.onalert("Data Added Successfully.!", "success")
            
        }
        props.onsave(data)
        setname("")
        setage("")


    }
    return <div>
        <form action="" onSubmit={submitHandler}>
            <div className='formcontainer'>
                <label htmlFor="nm">Name</label>
                <input type="text" value={name} name="" id="nm" onChange={nameHandler} />
                <label className='agelabel' htmlFor="age">Age (Years)</label>
                <input type="number" name="" value={age} id="age" onChange={ageHandler} />
                <button type='submit' className='addbtn'>Add Data</button>
            </div>
        </form>
    </div>;
}

export default UserInput;
