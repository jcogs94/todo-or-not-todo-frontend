import './Task.css'

const Task = () => {
    return <>
        <li className='task'>
            <input type="checkbox" name='completed' />
            <label htmlFor="completed">Task Name</label>
        </li>
    </>
}

export default Task
