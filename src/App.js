import React from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButtons from './components/FilterButton';


//pascal-case naming convention distinguishes react components from other JSX elements
function App(props) {

  //iterate through DATA props
  //use key prop and assign task id as thi prop's value to ensure that each value is unique
  const taskList = props.tasks.map(task => (<Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />));

  return (
    <div className="container todoapp stack-large shadow shadow-lg">
    <h1 className="text-center mt-5">
        Welcome to Listify, the site that simplifies to do lists
    </h1>
    <Form />
    <FilterButtons />
    <h2 id="list-heading" style={{fontFamily: "'Dosis', sans-serif"}}>
      3 tasks remaining
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
