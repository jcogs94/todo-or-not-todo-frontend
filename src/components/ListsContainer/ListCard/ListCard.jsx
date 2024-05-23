import Task from './Task/Task.jsx'
import './ListCard.css'
import { useState } from 'react'
import { createTask, showList, deleteList } from '../../../services/toDoService.js'

const ListCard = ({toDoList, onClick, deleteList}) => {
    const [list, setList] = useState(toDoList)
    const [newTaskName, setNewTaskName] = useState('')
    
    // Updates the list state with current DB data
    // To be called when changes are made to display
    // current data to user
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


    // When delete button is pressed, deletes from db
    // then updates the state of the reamining list
    const deleteHandler = async () => {
        await deleteList(list._id)
    }

    return <>
        <div className="list-card">
            <h3 onClick={onClick}>{list.name}<button className='list-delete' onClick={() => deleteHandler(list._id)}>X</button></h3>
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
