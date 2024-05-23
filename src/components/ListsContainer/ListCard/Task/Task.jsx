import { useState } from 'react'
import './Task.css'
import { updateTask } from '../../../../services/toDoService'

const Task = ({ listId, task }) => {
    const [finishedTask, setFinishedTask] = useState(task.completed)

    const checkHandler = (event) => {
        let data = {}
        // console.log(event.target.name);
        if (event.target.name === 'completed') {
            data.completed = !finishedTask
        }
        updateTask(listId, task._id, data)
    }

    return <>
        <li className='task'>
            <input type="checkbox" name='completed' checked={finishedTask}
                onChange={checkHandler} />
            <label htmlFor="completed"
                style={ finishedTask ? {textDecoration: "line-through"} : null }
                >{task.name}</label>
        </li>
    </>
}

export default Task
