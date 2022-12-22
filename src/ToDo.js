import React, { useState } from 'react'; 



function ToDo({todo,handleToggle,addFormFields}) {
    
    function handleClick(e)
    {
        e.preventDefault();
        handleToggle(e.currentTarget.id)       
    }
 
    //console.log(todo);
    return(
        <div>
           <table className="table">
           <thead>
            <tr>
                <th scope="col">Task</th>               
            </tr>
            </thead>          
            <tbody>
                {todo.map((item)=>{
                    return(
                       <tr id={item.id} key={item.id + item.task} name="todo" value={item.id} onClick={handleClick} >
                        <td>{item.task}</td>                       
                       </tr>
                    )
                })}
            </tbody>                   
           </table>            
        </div>        
    );
};
export default ToDo;