import { useState } from 'react'
import './Task.css'

const Task = ({ completed, name }) => {
    const [finishedTask, setFinishedTask] = useState(completed)

    const placeholderFunct = () => {
        console.log('check changed...')
    }

    return <>
        <li className='task'>
            <input type="checkbox" name='completed' checked={finishedTask}
                onChange={placeholderFunct} />
            <label htmlFor="completed"
                style={ finishedTask ? {textDecoration: "line-through"} : null }
                >{name}</label>
        </li>
    </>
}

export default Task
