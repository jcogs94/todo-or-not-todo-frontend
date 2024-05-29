import * as taskService from '../../../../../../services/taskService.js'
import './DisplayTask.css'

const DisplayTask = ({ listId, task, updateList, setEditTask }) => {
    // When delete button is pressed, deletes from db
    // then updates the state of the list
    const deleteHandler = async () => {
        await taskService.deleteTask(listId, task._id)
        await updateList()
    }

    // Changes task name to input field for editing
    const clickTaskNameHandler = () => {
        setEditTask(true)
    }
    
    return <>
        <label className='task-name' htmlFor="completed"
            style={ task.completed ? {textDecoration: "line-through"} : null }
            onClick={clickTaskNameHandler}
            >{task.name}</label>
        <div className="delete-button">
            <button onClick={() => deleteHandler(task._id)}>X</button>
        </div>
    </>
}

export default DisplayTask
