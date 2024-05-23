import ListCard from './ListCard/ListCard.jsx'
import { createList } from '../../services/toDoService.js'
import './ListsContainer.css'
import { useState } from 'react'

const ListsContainer = ({ allToDoLists }) => {
const [newListName, setNewListName] = useState('');

    const handleListCardClick = (toDoList) => { console.log('ListCard Clicked:', toDoList); }

// Updates input field with current newListName state
const handleNewListInput = (event) => {
    setNewListName(event.target.value)
}

// Creates a new List and resets the input
const handleSubmit = async (event) => {
    event.preventDefault()
    await createList(newListName)
    setNewListName('')
}



    return (
        <>
            <div id="lists-container">
                {allToDoLists.map((toDoList) => (
                    <ListCard
                        key={toDoList._id}
                        toDoList={toDoList}
                        onClick={() => handleListCardClick(toDoList)} />
                ))}
                <form className='add-list' onSubmit={handleSubmit}>
                <input type="text" required placeholder='Create New List'
                    value={newListName} onChange={handleNewListInput} />
                <button type="submit">+</button>
            </form>
            </div>
        </>
    )
}

export default ListsContainer
