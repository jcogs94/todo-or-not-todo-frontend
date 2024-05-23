import { updateTask } from '../../../../services/toDoService'
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

    return <>
        <li className='task'>
            <input type="checkbox" name='completed' checked={task.completed}
                onChange={checkHandler} />
            <label htmlFor="completed"
                style={ task.completed ? {textDecoration: "line-through"} : null }
                >{task.name}</label>
        </li>
    </>
}

export default Task
