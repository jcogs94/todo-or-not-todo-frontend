import Task from './Task/Task.jsx'
import './ListCard.css'
import { useState } from 'react'
import { createTask, showList, deleteListFromBD, updateList } from '../../../services/toDoService.js'

const ListCard = ({ toDoList, deleteList }) => {
    const [list, setList] = useState(toDoList)
    const [newTaskName, setNewTaskName] = useState('')
    const [updatedListName, setUpdatedListName] = useState(toDoList.name)
    const [editList, setEditList] = useState(false);


    // Updates the list state with current DB data
    // To be called when changes are made to display
    // current data to user
    const updateListComponent = async () => {
        const updatedList = await showList(list._id)
        setList(updatedList)
    }

    // Updates input field with current newTaskName state
    const handleNewTaskInput = (event) => {
        setNewTaskName(event.target.value)
    }

    // Updates input field with current newListName state
    const handleNewListInput = (event) => {
        setUpdatedListName(event.target.value)
    };

    // Changes List name to input field for editing
    const clickListNameHandler = () => {
        setUpdatedListName(list.name)
        setEditList(true)
    }

    // Creates a new task and resets the input
    const handleSubmit = async (event) => {
        event.preventDefault()
        await createTask(toDoList._id, newTaskName)
        await updateListComponent()
        setNewTaskName('')
    }


    // When delete button is pressed, deletes from db
    // then updates the state of the reamining list
    const deleteHandler = async () => {
        await deleteListFromBD(list._id)
        deleteList(list._id)
    }

    // Updates specific task with new data
    const updateListHandler = async (event) => {
        let data = {}

        // If the checkbox is calling this function,
        // adds "completed" to data, else if "name"
        // is calling, adds "name" to data
         if (event.target.innerHTML === '✓') {
            if (updatedListName.length) {
                data.name = updatedListName
                setEditList(false)
            }
        } else if (event.target.innerHTML === 'X') {
            setEditList(false)
        }
        
        // Updates task and displayed list component
        await updateList(list._id, data)
        await updateListComponent(list._id)
    }




    return <>
        <div className="list-card">
            <div className="list-heading">
                <div className='list-delete'></div>
                {editList ?
                    <input value={updatedListName} onChange={handleNewListInput}
                        className='edit-list-input'
                        placeholder='Enter a list name' ></input>
                    :
                    <h3 onClick={clickListNameHandler}>{list.name}</h3>
                }
                {editList ?
                    <div className='update-list-buttons'>
                        <button className='update--list-check-button' onClick={updateListHandler}>✓</button>
                        <button className='update-list-cancel-button' onClick={updateListHandler}>X</button>
                    </div>
                    :
                    <div className="list-delete">
                        <button onClick={() => deleteHandler(list._id)}>X</button>
                    </div>
                }

            </div>
            {list.tasks.length ?
                <ul>
                    {list.tasks.map((task) => (
                        <Task key={task._id} listId={list._id}
                            task={task} updateListComponent={updateListComponent} />
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
