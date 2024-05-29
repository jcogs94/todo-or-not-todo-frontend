import { useState } from 'react'
import EditTask from './EditTask/EditTask.jsx'
import DisplayTask from './DisplayTask/DisplayTask.jsx'
import Checkbox from './Checkbox/Checkbox.jsx'
import './Task.css'

const Task = ({ listId, task, updateList }) => {
    const [editTask, setEditTask] = useState(false)
    
    return <>
        <li className='task'>
            <Checkbox listId={listId} task={task}
                updateList={updateList} />
            <div className='task-input'>
                { editTask ?
                        <EditTask listId={listId} task={task}
                            updateList={updateList} setEditTask={setEditTask} />
                    :
                        <DisplayTask listId={listId} task={task}
                            updateList={updateList} setEditTask={setEditTask} />
                }
            </div>
        </li>
    </>
}

export default Task
