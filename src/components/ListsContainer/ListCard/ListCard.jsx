import Task from './Task/Task.jsx'
import './ListCard.css'

const ListCard = ({toDoList}) => {
    console.log(toDoList);
    console.log('Tasks:', toDoList.tasks);
    
    return <>
        <div className="list-card">
            <h3>{toDoList.name}</h3>
            <ul>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </ul>
        </div>
    </>
}

export default ListCard
