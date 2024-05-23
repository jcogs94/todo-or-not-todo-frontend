import { useState } from 'react'

const CreateForm = (props) => {
    const [formData, setFormData] = useState({
        listName: '',
        tasks: [],
    });

    const [task, setTask] = useState({
        taskName: '',
        notes: '',
        completed: false,
    });

    // handleListNameChange function to update formData state
    const handleListNameChange = (evt) => {
        setFormData({ ...formData, listName: evt.target.value });
    };

    // handles completed checkbox
    const handelTaskChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        setTask({ ...task, [name]: type === 'checkbox' ? checked : value, });
    };

    // handles the addition of new tasks
    const addTask = (evt) => {
        evt.preventDefault();
        setFormData({
            ...formData, tasks: [...formData.tasks, task],
        });
        setTask({
            taskName: '',
            notes: '',
            completed: false,
        });
    };
    // handles OnSubmit
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            listName: '',
            tasks: [],
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="listName"> Title of Task List: </label>
                <input
                    id="listName"
                    name="listName"
                    value={formData.listName}
                    onChange={handleListNameChange}
                    required
                />
                <div>
                    <label htmlFor="taskName"> Tasks: </label>
                    <input
                        id="taskName"
                        name="taskName"
                        value={task.taskName}
                        onChange={handleTaskChange}
                        required
                    />
                    <label htmlFor="notes"> Notes: </label>
                    <input
                        id="notes"
                        name="notes"
                        value={task.notes}
                        onChange={handleTaskChange}
                    />
                    <label htmlFor="completed"> Completed: </label>
                    <input
                        type='checkbox'
                        id="completed"
                        name="completed"
                        value={task.completed}
                        onChange={handleTaskChange}
                        required
                    />
                    <button onClick={addTask}>Add New Task</button>
                </div >
                <button type="submit">Submit New Task List</button>
            </form >
            <div>
                <h3>Current Task List: {formData.listName}</h3>
                <ul>
                    {formData.tasks.map((task, index) => (
                        <li key={index} className={task.completed ? 'completed-task' : ''}>
                            <strong>{task.taskName}</strong> - {task.notes}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CreateForm;
