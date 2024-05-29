import CreateList from './CreateList/CreateList.jsx'
import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({ allLists, addList, removeList }) => {
    return <>
        <div id="lists-container">
            {allLists.map( (list) => (
                <ListCard
                    key={list._id}
                    toDoList={list}
                    removeList={removeList} />
            ))}
            <CreateList addList={addList} />
        </div>
    </>
}

export default ListsContainer
