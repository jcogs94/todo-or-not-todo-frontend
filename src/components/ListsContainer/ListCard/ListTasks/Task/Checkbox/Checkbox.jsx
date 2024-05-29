import { useState } from "react"
import * as taskService from '../../../../../../services/taskService.js'
import './Checkbox.css'

const Checkbox = ({ listId, task, updateList }) => {
    const [isChecked, setIsChecked] = useState(task.completed)
    
    // Updates specific task with new data
    const handleChecked = async () => {
        let data = { completed: !isChecked }
        
        // Updates task and displayed list component
        await taskService.update(listId, task._id, data)
        await updateList()
        setIsChecked(!isChecked)
    }

    return <>
        <input type="checkbox" name='completed' checked={isChecked}
                    onChange={handleChecked} />
    </>
}

export default Checkbox
