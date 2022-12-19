import React, { useState } from 'react'; 

function ToDoForm({addTask})
{
    const [userInput, setUserInput] = useState('');
    
    function handleChange(e)
    {
       setUserInput(e.currentTarget.value)
    }
    function handleSubmit(e)
    {
       e.preventDefault();
       addTask(userInput);
       setUserInput("");
    }  
    return(
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter a task.."/>
            <button>Submit</button>
        </form>
    )
}
export default ToDoForm;

