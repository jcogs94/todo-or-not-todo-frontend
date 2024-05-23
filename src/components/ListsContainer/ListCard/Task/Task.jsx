import { deleteTask, updateTask } from '../../../../services/toDoService'
import './Task.css'

const Task = ({ listId, task, updateList }) => {
    const checkHandler = async (event) => {
        let data = {}
        if (event.target.name === 'completed') {
            data.completed = !task.completed
        }
        await updateTask(listId, task._id, data)
        await updateList(listId)
    }

    // When delete button is pressed, deletes from db
    // then updates the state of the list
    const deleteHandler = async (taskId) => {
        await deleteTask(listId, taskId)
        await updateList(listId)
    }

    return <>
        <li className='task'>
            <div>
                <input type="checkbox" name='completed' checked={task.completed}
                    onChange={checkHandler} />
                <label htmlFor="completed"
                style={ task.completed ? {textDecoration: "line-through"} : null }
                >{task.name}</label>
            </div>
            <div className="delete-button">
                <button onClick={() => deleteHandler(task._id)}>X</button>
            </div>
        </li>
    </>
}

export default Task
