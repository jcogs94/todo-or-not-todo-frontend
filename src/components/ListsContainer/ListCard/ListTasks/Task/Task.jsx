import { useState } from 'react'
import * as taskService from '../../../../../services/taskService.js'
import './Task.css'

const Task = ({ listId, task, updateList }) => {
    const [editTask, setEditTask] = useState(false)
    const [updatedTaskName, setUpdatedTaskName] = useState(task.name)
    
    // Updates specific task with new data
    const updateTaskHandler = async (event) => {
        let data = {}

        // If the checkbox is calling this function,
        // adds "completed" to data, else if "name"
        // is calling, adds "name" to data
        if (event.target.name === 'completed') {
            data.completed = !task.completed
        } else if (event.target.innerHTML === '✓') {
            if (updatedTaskName.length) {
                data.name = updatedTaskName
                setEditTask(false)
            }
        } else if (event.target.innerHTML === 'X') {
            setEditTask(false)
        }
        
        // Updates task and displayed list component
        await taskService.update(listId, task._id, data)
        await updateList(listId)
    }

    // When delete button is pressed, deletes from db
    // then updates the state of the list
    const deleteHandler = async () => {
        await taskService.deleteTask(listId, task._id)
        await updateList(listId)
    }

    // Changes task name to input field for editing
    const clickTaskNameHandler = () => {
        setUpdatedTaskName(task.name)
        setEditTask(true)
    }

    // Updates state of input as user types
    const nameInputHandler = (event) => {
        setUpdatedTaskName(event.target.value)
    }

    return <>
        <li className='task'>
            <div className='task-input'>
                <input type="checkbox" name='completed' checked={task.completed}
                    onChange={updateTaskHandler} />
                { editTask ? <>
                        <input value={updatedTaskName} onChange={nameInputHandler}
                            className='edit-task-input'
                            placeholder='Enter a task name' ></input>
                        <div className='update-task-buttons'>
                            <button className='update-check-button' onClick={updateTaskHandler}>✓</button>
                            <button className='update-cancel-button' onClick={updateTaskHandler}>X</button>
                        </div>
                    </> : <>
                        <label htmlFor="completed"
                            style={ task.completed ? {textDecoration: "line-through"} : null }
                            onClick={clickTaskNameHandler}
                            >{task.name}</label>
                        <div className="delete-button">
                            <button onClick={() => deleteHandler(task._id)}>X</button>
                        </div>
                    </>
                }
            </div>
        </li>
    </>
}

export default Task
