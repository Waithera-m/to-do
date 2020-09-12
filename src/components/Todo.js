import React, { useState } from 'react';


export default function Todo (props) {

    //set state to facilitate the implementation of conditional template rendering
    const [isEditing, setEditing] = useState(false);

    //create new hook to store and set new task name
    const [newName, setNewName] = useState('');


    //function sets new task name
    function handleChange(e){
      setNewName(e.target.value);
    }

    //function handles editing form onsubmit event
    function handleSubmit(e){
      e.preventDefault();
      props.editTask(props.id, newName);
      setNewName("");
      setEditing(false);
    }

    const editingTemplate = (
      <form className="stack-small" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
            New name for {props.name}
          </label>
          <input id={props.id} className="todo-text text-muted" type="text" autoFocus="autofocus" value={newName} onChange={handleChange} />
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-danger mr-1" onClick={() => setEditing(false)}>
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>
          </button>
          <button type="submit" className="btn btn-success todo-edit ml-1">
            Save
            <span className="visually-hidden">new name for {props.name}</span>
          </button>
        </div>
      </form>
    );

    const viewTemplate = (
        <div className="stack-small">
        <div className="c-cb">
          {/* true in curly brackets because defaultChecked is a true boolean attribute */}
          <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskcompleted(props.id)} />
          <label className="todo-label" htmlFor={props.id}>
          {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-info mr-1" onClick={() => setEditing(true)}>
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button type="button" className="btn btn-danger ml-1" onClick={() => props.deleteTask(props.id)}>
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </div> 
    );

    return <li className="todo">{isEditing ? editingTemplate: viewTemplate}</li>;
}