import Task from './Task/Task.jsx'
import './ListTasks.css'

const ListTasks = ({ list, updateList }) => {
    return <>
        {list.tasks.length ?
                <ul className='tasks'>
                    {list.tasks.map((task) => (
                        <Task key={task._id} listId={list._id}
                            task={task} updateList={updateList} />
                    ))}
                </ul>
            :
                <p className='no-tasks'><em>There are no tasks for this list</em></p>
        }
    </>
}

export default ListTasks
