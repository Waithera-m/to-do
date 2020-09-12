import React, { useState } from 'react';
import { nanoid } from "nanoid";

import Todo from './components/Todo';
import Form from './components/Form';
import FilterButtons from './components/FilterButton';


//pascal-case naming convention distinguishes react components from other JSX elements
function App(props) {

  //define default tasks to be displayed and function to update this list
  const [tasks, setTasks] = useState(props.tasks);

  //function maps over original task list and creates a new task object, using object spread syntax, whose completed status is inverted
  function toggleTaskcompleted(id){
    const updatedTasks = tasks.map( task => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  //function filters the existing tasks array and returns a new array which excludes a task whose id has been passed
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  //iterate through the tasks state
  //use key prop and assign task id as this prop's value to ensure that each value is unique
  const taskList = tasks.map(task => (<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskcompleted={toggleTaskcompleted} deleteTask={deleteTask} />));

  //function defines structure of a new task, copies the existing tasks array, appends new tasks to this copy, and passess this new array to setTasks function to update the component's state
  function addTask(name) {
    //nanoid library used to ensure that each new task's id is unique
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  //variable determines if task noun will be in singular or plural form
  //ternary operator used instead of if else block to enhance readability and minimise lines of code
  const headingNoun = taskList.length !== 1 ? 'tasks':'task';

  //variable stores the number of available tasks
  const headingText = `${taskList.length} ${headingNoun} remaining`;

  return (
    <div className="container todoapp stack-large shadow shadow-lg">
    <h1 className="text-center mt-5">
        Welcome to Listify, the site that simplifies to do lists
    </h1>
    <Form addTask={addTask}/>
    <FilterButtons />
    <h2 id="list-heading" style={{fontFamily: "'Dosis', sans-serif"}}>
      {headingText}
    </h2>
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      { taskList }
    </ul>
  </div>

  );
}

export default App;
