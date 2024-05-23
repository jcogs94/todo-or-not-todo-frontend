import Task from './Task/Task.jsx'
import './ListCard.css'
import { useState } from 'react'
import { createTask, showList } from '../../../services/toDoService.js'

const ListCard = ({toDoList, onClick}) => {
    const [list, setList] = useState(toDoList)
    const [newTaskName, setNewTaskName] = useState('')
    
    const updateList = async () => {
        const updatedList = await showList(list._id)
        setList(updatedList)
    }

    // Updates input field with current newTaskName state
    const handleNewTaskInput = (event) => {
        setNewTaskName(event.target.value)
    }

    // Creates a new task and resets the input
    const handleSubmit = async (event) => {
        event.preventDefault()
        await createTask(toDoList._id, newTaskName)
        await updateList()
        setNewTaskName('')
    }

    return <>
        <div className="list-card">
            <h3 onClick={onClick}>{list.name}</h3>
            { list.tasks.length ?
                <ul>
                    { list.tasks.map( (task) => (
                        <Task key={task._id} listId={list._id}
                            task={task} updateList={updateList} />
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
