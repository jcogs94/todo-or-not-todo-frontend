import Task from './Task/Task.jsx'
import './ListCard.css'

const ListCard = ({toDoList}) => {
    return <>
        <div className="list-card">
            <h3>{toDoList.name}</h3>
            { toDoList.tasks.length ?
                <ul>
                    { toDoList.tasks.map( (task) => (
                        <Task key={task._id} {...task} />
                    ))}
                </ul>
            :
                <p className='no-tasks'><em>There are no tasks for this list</em></p>
            }
        </div>
    </>
}

export default ListCard
