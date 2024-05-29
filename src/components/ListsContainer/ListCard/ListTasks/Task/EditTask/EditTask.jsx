import { useState } from 'react'
import * as taskService from '../../../../../../services/taskService.js'
import './EditTask.css'

const EditTask = ({ listId, task, updateList, setEditTask }) => {
    const [taskNameInput, setTaskNameInput] = useState(task.name)
    
    // Updates state of input as user types
    const handleInputName = (event) => {
        setTaskNameInput(event.target.value)
    }

    // Updates specific task with new data, editTask set to false
    const handleUpdateName = async (event) => {
        // If '✓' button is calling this function (has been clicked) AND
        // taskNameInput.length has value, updates task name
        if (event.target.innerHTML === '✓' && taskNameInput.length) {
            let data = { name: taskNameInput }

            // Updates task and displayed list component
            await taskService.update(listId, task._id, data)
            await updateList()
        }
        
        setEditTask(false)
    }
    
    return <>
        <input value={taskNameInput} onChange={handleInputName}
            className='edit-task-input'
            placeholder='Enter a task name' ></input>
        <div className='update-task-buttons'>
            <button className='update-check-button' onClick={handleUpdateName}>✓</button>
            <button className='update-cancel-button' onClick={handleUpdateName}>X</button>
        </div>
    </>
}

export default EditTask
