import { useState } from 'react'
import * as listService from '../../../services/listService.js'
import './CreateList.css'

const CreateList = ({ addList }) => {
    const [inputListName, setInputListName] = useState('');

    // Updates input field with current inputListName state
    const handleInputChange = (event) => {
        setInputListName(event.target.value)
    }

    // Creates a new List and resets the input
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        // Stores new list returned from service
        const newList = await listService.create(inputListName)

        // If newList has value,
        if (newList) {
            addList(newList); // Update allLists state in App.jsx
        }

        setInputListName('') // Resets inputListName to empty str
    }

    return <>
        <div className='add-list-container'>
            <form className='add-list' onSubmit={handleSubmit}>
                <input type="text" required placeholder='Create New List'
                    value={inputListName} onChange={handleInputChange} />
                <button type="submit">+</button>
            </form>
        </div>
    </>
}

export default CreateList
