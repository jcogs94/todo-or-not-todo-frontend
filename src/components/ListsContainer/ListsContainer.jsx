import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({allToDoLists}) => {
    const tasks=allToDoLists.map((task) => <li key={task._id}>{task.name}</li>)

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
