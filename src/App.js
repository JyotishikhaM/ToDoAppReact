import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; 
import Header from './Header';
import data from './data.json'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'


function App() {
  const[todoList,setToDoList]=useState(data);
  function handleToggle(id)
  {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete } : {...task};
    });
    setToDoList(mapped);
  }
  function handleFilter()
  {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  } 
  function addTask(userInput)
  {
    let copy=[...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);    
  }
   
    
  return (
    <div className="App">
      <Header/>
      <ToDoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
