import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// The constants uppercase name just indicates that the data is unlikey to change after definition
const DATA = 
[
  {id: "todo-0", name: "Sleep", completed: true},
  {id: "todo-1", name: "Eat", completed: false},
  {id: "todo-2", name: "Repeat", completed: false},
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
