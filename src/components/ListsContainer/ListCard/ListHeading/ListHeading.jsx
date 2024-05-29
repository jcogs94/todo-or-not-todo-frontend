import { useState } from 'react'
import * as listService from '../../../../services/listService.js'
import './ListHeading.css'

const ListHeading = ({ list, updateList, removeList }) => {
    const [editList, setEditList] = useState(false)
    const [listNameInput, setListNameInput] = useState(list.name)

    // Changes List name to input field for editing
    const handleListNameClick = () => {
        setListNameInput(list.name)
        setEditList(true)
    }
    
    // When delete button is pressed, deletes from db
    // then updates the state of the remaining lists
    const handleDelete = async () => {
        await listService.deleteList(list._id)
        removeList(list._id)
    }
    
    // Updates input field with current listNameInput state
    const handleListNameInput = (event) => {
        setListNameInput(event.target.value)
    };

    // Changes list name back to heading and updates specific
    // list with new name if '✓' clicked
    const handleUpdateList = async (event) => {
        // If '✓' button is calling this function (has been clicked) AND
        // listNameInput.length has value, updates list name with nameInput value
        if (event.target.innerHTML === '✓' && listNameInput.length) {
            // data has name value of listNameInput
            let data = { name: listNameInput }

            // Updates list and displayed list component
            await listService.update(list._id, data)
            await updateList(list._id)
        }
        
        setEditList(false)
    }
    
    return <>
        <div className="list-heading">
            <div className='list-delete'></div>
            {editList ? <>
                    <input value={listNameInput} onChange={handleListNameInput}
                        className='edit-list-input'
                        placeholder='Enter a list name' />
                    <div className='update-list-buttons'>
                        <button className='update-list-check-button' onClick={handleUpdateList}>✓</button>
                        <button className='update-list-cancel-button' onClick={handleUpdateList}>X</button>
                    </div></>
                : <>
                    <h3 onClick={handleListNameClick}>{list.name}</h3>
                    <div className="list-delete">
                        <button onClick={() => handleDelete(list._id)}>X</button>
                    </div></>
            }
        </div>
    </>
}

export default ListHeading
