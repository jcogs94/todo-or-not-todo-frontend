// import NavBar from './components/NavBar (unused)/NavBar.jsx'
import { useState, useEffect } from 'react'
import * as listService from './services/listService.js'
import ListsContainer from './components/ListsContainer/ListsContainer.jsx'
import './App.css'

function App() {
  const [allLists, setAllLists] = useState([]);

  // Effect loads index from API on page load
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const allLists = await listService.index();
        if (allLists.error) {
          throw new Error(allLists.error);
        } else {
          setAllLists(allLists);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLists();
  }, []);

  // Adds a newly created list to allToDoLists state, allows
  // display of new list to user
  const addList = (newList) => {
    setAllLists(prevLists => [...prevLists, newList])
  }

  // Removes a deleted list from allToDoLists state, allows
  // user to see the list has been deleted
  const removeList = (listId) => {
    setAllLists(prevLists => prevLists.filter(list => list._id !== listId));
  }

  return <>
    {/* NavBar removed due to it being an unused placeholder component */}
    {/* <NavBar /> */}
    <h1>ToDo or Not ToDo</h1>
    <ListsContainer allLists={allLists} addList={addList} removeList={removeList} />
  </>
}

export default App
