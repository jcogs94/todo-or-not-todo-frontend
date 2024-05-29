import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import * as toDoService from './services/toDoService.js'
import ListsContainer from './components/ListsContainer/ListsContainer.jsx'
import CalendarLists from './components/CalendarLists/CalendarLists.jsx'
import './App.css'


function App() {
  const [allToDoLists, setAllToDoLists] = useState([]);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await toDoService.index();
        if (tasks.error) {
          throw new Error(tasks.error);
        }
        setAllToDoLists(tasks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  const addNewList = (newList) => {
    setAllToDoLists(prevLists => [...prevLists, newList])
  }

  const deleteList = (listId) => {
    setAllToDoLists(prevLists => prevLists.filter(list => list._id !== listId));
  }


  return <>
    {/* <NavBar /> */}
    <h1>ToDo or Not ToDo</h1>
    <CalendarLists deleteList={deleteList} />
    <ListsContainer allToDoLists={allToDoLists} addNewList={addNewList} deleteList={deleteList} />
  </>
}

export default App
