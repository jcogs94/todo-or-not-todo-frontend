import ListCard from './ListCard/ListCard.jsx'
import { createList } from '../../services/toDoService.js'
import './ListsContainer.css'
import { useState } from 'react'

const ListsContainer = ({ allToDoLists, addNewList, deleteList }) => {
const [newListName, setNewListName] = useState('');

    

// Updates input field with current newListName state
const handleNewListInput = (event) => {
    setNewListName(event.target.value)
}

// Creates a new List and resets the input
const handleSubmit = async (event) => {
    event.preventDefault()
    const newList = await createList(newListName)
    if (newList) {
       addNewList(newList); // Update the state in the parent component
    }
    setNewListName('')
}



    return (
        <>
            <div id="lists-container">
                {allToDoLists.map((toDoList) => (
                    <ListCard
                        key={toDoList._id}
                        toDoList={toDoList}
                        deleteList={deleteList} />
                ))}
                <div className='add-list-container'>
                    <form className='add-list' onSubmit={handleSubmit}>
                        <input type="text" required placeholder='Create New List'
                            value={newListName} onChange={handleNewListInput} />
                        <button type="submit">+</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ListsContainer
