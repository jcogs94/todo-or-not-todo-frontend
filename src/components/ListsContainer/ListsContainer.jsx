import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({allToDoList}) => {
    const tasks=allToDoList.map((task) => <li key={task._id}>{task.name}</li>)

    return (
        <>

            <div id="lists-container">
                {allToDoList.map((toDoList) => (
                    <ListCard key={toDoList._id} toDoList={toDoList}/>
                ))}
            </div>
        </>
    )
}

export default ListsContainer
