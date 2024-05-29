import CreateList from './CreateList/CreateList.jsx'
import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({ allLists, addList, removeList }) => {
    return <>
        <div id="lists-container">
            {/* Creates a ListCard for each list in allToDoLists */}
            {allLists.map( (list) => (
                <ListCard
                    key={list._id}
                    toDoList={list}
                    removeList={removeList} />
            ))}
            {/* Form for a user to create a new list */}
            <CreateList addList={addList} />
        </div>
    </>
}

export default ListsContainer
