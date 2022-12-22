import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import data from './data.json'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'


function App() {
  const [todoList, setToDoList] = useState(data);
  const [name, setData] = useState("Jyoti");
  const [aryname, setAryname] = useState({});
  //const[deleteObj,setDeleteObj]=useState()

  function handleToggle(id) {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }
  function handleFilter() {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  function addTask(userInput) {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }  
  function setUpdate(item) {
    console.log("id", item);
    //let filter=todoList.filter(item=>)
    setAryname(item) 
    //setToDoList(item);   
  }
  function changeDetails(val) {
    let arraycopy = { ...aryname };
    arraycopy.task = val;
    setAryname(arraycopy);
  }
  function update() {
    let list = todoList.map((obj) => {
      if (obj.id === aryname.id) {
        return aryname;
      }
      return obj;
    })
    setToDoList(list);
    setAryname({id:"", task:"",complete:false})
  }
  function handleDelete(id)
  {
    console.log(id);
    let listobj=[...todoList];
    let index=listobj.findIndex((item)=>item.id===id);
    listobj.splice(index,1);
    setToDoList(listobj);
  }
  console.log(aryname);
  return (
    <div className="App">
      <Header />
      <input type="text" value={aryname.task} onChange={(e) => changeDetails(e.target.value)} /><button onClick={update}>Update</button>
      <ToDoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} setupdate={setUpdate} handledelete={handleDelete}/>
      <ToDoForm addTask={addTask} />      
    </div>
  );
}

export default App;
