import React, { useState } from 'react';

export default function Form (props)
{
    //state used instead of props because the data to be displayed by the App component will be created and tracked by this child component
    //useState hook determines the initial value of a component's state. Returns state and function that updates the state. Array desctructuring used to capture state and function in different variables
    //ps: unlike props, states can be updated

    const [name, setName] = useState('');

    //function captures users' input
    function handleChange(e) {
        setName(e.target.value)
    }

    //function sends entered data to the parent component
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg" style={{fontFamily: "'Dosis', sans-serif"}}>
                What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg text-muted"
                name="text"
                autoComplete="off"
                autoFocus="autoFocus"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-info btn__lg shadow shadow-md" style={{fontFamily: "'Dosis', sans-serif"}}>
                Add A New Task
            </button>
        </form>
    );
}