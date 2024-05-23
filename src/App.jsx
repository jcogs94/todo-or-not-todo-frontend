import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import * as toDoService from './services/toDoService.js'
import ListsContainer from './components/ListsContainer/ListsContainer.jsx'
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





  return <>
    <NavBar />
    <h1>Start</h1>
    <ListsContainer allToDoLists={allToDoLists} addNewList={addNewList} />
  </>
}

export default App
