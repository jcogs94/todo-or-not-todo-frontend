const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;


// returns all lists
const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data;

    } catch (err) {
        console.log(err);
    }
};

// "Show info" for list
const showList = async (listId) => {
    // Defines proper URL for the request and the data
    // to be sent
    const REQ_URL = BASE_URL + '/' + listId

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Add a List
const createList = async (newListName) => {
    // Defines proper URL for the request and the data
    // to be sent
    const data = {
        name: newListName,
    }

    try {
        // Found from following url:
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const createdList = await res.json();
        return createdList;
    } catch (err) {
        console.log(err)
    }
}

// Adds new task to list
const createTask = async (listId, newTaskName) => {
    // Defines proper URL for the request and the data
    // to be sent
    const REQ_URL = BASE_URL + '/' + listId + '/tasks'
    const data = {
        name: newTaskName,
        completed: false
    }

    try {
        // Found from following url:
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        await fetch(REQ_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err)
    }
}

// Updates task on list
const updateTask = async (listId, taskId, data) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + listId + '/tasks/' + taskId

    try {
        // Found from following url:
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        await fetch(REQ_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err)
    }
}

export {
    index, showList, createTask, updateTask, createList
};