import { useState } from 'react'
import * as taskService from '../../../../services/taskService.js'
import './CreateTask.css'

const CreateTask = ({ list, updateList }) => {
    const [nameInput, setNameInput] = useState('')
    
    // Updates input field with current nameInput state
    const handleNameInput = (event) => {
        setNameInput(event.target.value)
    }

    // Creates a new task and resets nameInput
    const handleSubmit = async (event) => {
        event.preventDefault()
        await taskService.create(list._id, nameInput)
        await updateList()
        setNameInput('')
    }

    return <>
        <form className='add-task' onSubmit={handleSubmit}>
            <input type="text" required placeholder='New task'
                value={nameInput} onChange={handleNameInput} />
            <button type="submit">+</button>
        </form>
    </>
}

export default CreateTask
