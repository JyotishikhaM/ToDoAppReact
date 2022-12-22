import React, { useState } from 'react';
import ToDo from './ToDo';

function ToDoList({todoList, handleToggle, handleFilter,setupdate,handledelete }) {
    const [userInput, setUserInput] = useState('');
    const[taskname,setTaskName]=useState('');
    // function setname() {
    //     setdata("Shikha")
    // }
    function handleClick(e) {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }
    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }
    // function handleDataSubmit(e)
    // {
    //     e.preventDefault();        
    //     addformfields(userInput);
    //     setUserInput("");
    // }

    return (
        <div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Task</th>
                            <th>Update|Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td id={item.id}  name="todo" value={item.id} onClick={handleClick}  className={item.complete ? "todo strike" : "todo"}>{item.task}</td>
                                    <td id={item.id} name="todo" onChange={handleChange}>                                        
                                        <button onClick={()=>setupdate(item)}>Update</button>
                                        <button onClick={()=>handledelete(item.id)}>Delete</button>                                        
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {/* <ToDo todo={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/> */}
            <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>            
        </div>
    );
};

export default ToDoList;