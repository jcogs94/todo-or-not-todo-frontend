import { useState } from 'react'
import * as listService from '../../../services/listService.js'
import ListHeading from './ListHeading/ListHeading.jsx'
import ListTasks from './ListTasks/ListTasks.jsx'
import CreateTask from './CreateTask/CreateTask.jsx'
import './ListCard.css'

const ListCard = ({ toDoList, removeList }) => {
    const [list, setList] = useState(toDoList)

    // Updates the list state with current DB data
    // To be called when changes are made to display
    // current data to user
    const updateList = async () => {
        const updatedList = await listService.show(list._id)
        setList(updatedList)
    }

    return <>
        <div className="list-card">
            <ListHeading list={list} updateList={updateList} removeList={removeList} />
            <ListTasks list={list} updateList={updateList} />
            <CreateTask list={list} updateList={updateList} />
        </div>
    </>
}

export default ListCard
