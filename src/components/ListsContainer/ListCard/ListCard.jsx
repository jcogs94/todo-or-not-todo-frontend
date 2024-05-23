import Task from './Task/Task.jsx'
import './ListCard.css'
import { useState } from 'react'
import { createTask } from '../../../services/toDoService.js'

const ListCard = ({toDoList, onClick}) => {
    const [newTaskName, setNewTaskName] = useState('')
    
    // Updates input field with current newTaskName state
    const handleNewTaskInput = (event) => {
        setNewTaskName(event.target.value)
    }

    // Creates a new task and resets the input
    const handleSubmit = async (event) => {
        event.preventDefault()
        await createTask(toDoList._id, newTaskName)
        setNewTaskName('')
    }

    return <>
        <div className="list-card">
            <h3 onClick={onClick}>{toDoList.name}</h3>
            { toDoList.tasks.length ?
                <ul>
                    { toDoList.tasks.map( (task) => (
                        <Task key={task._id} {...task} />
                    ))}
                </ul>
            :
                <p className='no-tasks'><em>There are no tasks for this list</em></p>
            }
            <form className='add-task' onSubmit={handleSubmit}>
                <input type="text" required placeholder='New task'
                    value={newTaskName} onChange={handleNewTaskInput} />
                <button type="submit">+</button>
            </form>
        </div>
    </>
}

export default ListCard
