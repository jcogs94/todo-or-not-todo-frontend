import Task from './Task/Task.jsx'
import './ListCard.css'

const ListCard = () => {
    return (
        <>
            <div className="list-card">
                <h3>List Name</h3>
                <ul>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </ul>
            </div>
        </>
    )
}

export default ListCard
