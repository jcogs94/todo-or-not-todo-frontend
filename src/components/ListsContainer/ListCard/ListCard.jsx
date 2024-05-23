import Task from './Task/Task.jsx'
import './ListCard.css'
import { useState } from 'react'

const ListCard = ({toDoList, onClick}) => {
    const [newTaskName, setNewTaskName] = useState('')
    
    // Updates input field with current newTaskName state
    const handleNewTaskInput = (event) => {
        setNewTaskName(event.target.value)
    }

    // Creates a new task and resets the input
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newTaskName, 'added...')
        // TODO: backend service to add new task with newTaskName
        setNewTaskName('')
    }

    return <>
        <div className="list-card" onClick={onClick}>
            <h3>{toDoList.name}</h3>
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
