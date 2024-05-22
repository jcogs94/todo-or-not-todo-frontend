import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = ({taskList}) => {
    const tasks=taskList.map((task) => <li key={task._id}>{task.name}</li>)

    return (
        <>
            <div id="lists-container">
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
            </div>
        </>
    )
}

export default ListsContainer
