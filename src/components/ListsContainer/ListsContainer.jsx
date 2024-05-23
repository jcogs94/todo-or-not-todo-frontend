import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({ allToDoLists }) => {
    const handleListCardClick = (toDoList) => { console.log('ListCard Clicked:', toDoList); }
    return (
        <>
            <div id="lists-container">
                {allToDoLists.map((toDoList) => (
                    <ListCard
                        key={toDoList._id}
                        toDoList={toDoList}
                        onClick={() => handleListCardClick(toDoList)} />
                ))}
            </div>
        </>
    )
}

export default ListsContainer
