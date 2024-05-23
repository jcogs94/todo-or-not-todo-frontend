import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({AllToDoList}) => {
    const tasks=AllToDoList.map((task) => <li key={task._id}>{task.name}</li>)

    return (
        <>

            <div id="lists-container">
                {AllToDoList.map((toDoList) => (
                    <ListCard key={toDoList._id} toDoList={toDoList}/>
                ))}
            </div>
        </>
    )
}

export default ListsContainer
