import React from 'react';

export default function form (props)
{
    return(
        <form>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg" style={{fontFamily: "'Dosis', sans-serif"}}>
                What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                autoFocus="autoFocus"
            />
            <button type="submit" className="btn btn-info btn__lg shadow shadow-md" style={{fontFamily: "'Dosis', sans-serif"}}>
                Add A New Task
            </button>
        </form>
    );
}