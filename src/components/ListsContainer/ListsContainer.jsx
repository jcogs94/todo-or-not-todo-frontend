import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({allToDoLists}) => {
    

    return (
        <>

            <div id="lists-container">
                {allToDoLists.map((toDoList) => (
                    <ListCard key={toDoList._id} toDoList={toDoList}/>
                ))}
            </div>
        </>
    )
}

export default ListsContainer
