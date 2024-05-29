// import { useState } from 'react'

// const CreateForm = (props) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         tasks: [],
//     });

//     const [task, setTask] = useState({
//         name: '',
//         notes: '',
//         completed: false,
//     });

//     // handleNameChange function to update formData state
//     const handleNameChange = (evt) => {
//         setFormData({ ...formData, name: evt.target.value });
//     };

//     // handles completed checkbox
//     const handleTaskChange = (evt) => {
//         const { name, value, type, checked } = evt.target;
//         setTask({ ...task, [name]: type === 'checkbox' ? checked : value, });
//     };

//     // handles the addition of new tasks
//     const addTask = (evt) => {
//         evt.preventDefault();
//         setFormData({
//             ...formData, tasks: [...formData.tasks, task],
//         });
//         setTask({
//             name: '',
//             notes: '',
//             completed: false,
//         });
//     };
//     // handles OnSubmit
//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log('Form submitted:', formData);
//         setFormData({
//             name: '',
//             tasks: [],
//         });
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name"> Title of Task List: </label>
//                 <input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleNameChange}
//                     required
//                 />
//                 <div>
//                     <label htmlFor="name"> Tasks: </label>
//                     <input
//                         id="name"
//                         name="name"
//                         value={task.name}
//                         onChange={handleTaskChange}
//                         required
//                     />
//                     <label htmlFor="notes"> Notes: </label>
//                     <input
//                         id="notes"
//                         name="notes"
//                         value={task.notes}
//                         onChange={handleTaskChange}
//                     />
//                     <label htmlFor="completed"> Completed: </label>
//                     <input
//                         type='checkbox'
//                         id="completed"
//                         name="completed"
//                         value={task.completed}
//                         onChange={handleTaskChange}
//                         required
//                     />
//                     <button onClick={addTask}>Add New Task</button>
//                 </div >
//                 <button type="submit">Submit New Task List</button>
//             </form >
//             <div>
//                 <h3>Current Task List: {formData.name}</h3>
//                 <ul>
//                     {formData.tasks.map((task, index) => (
//                         <li key={index} className={task.completed ? 'completed-task' : ''}>
//                             <strong>{task.name}</strong> - {task.notes}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default CreateForm;
