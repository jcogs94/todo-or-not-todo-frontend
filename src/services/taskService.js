const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

// Creates new task in specific list
const create = async (listId, newTaskName) => {
    // Defines proper URL for the request and the data
    // to be sent
    const REQ_URL = BASE_URL + '/' + listId + '/tasks'
    const data = {
        name: newTaskName,
        completed: false
    }

    try {
        // Sends POST req with data in req.body to create new task
        // ===================== Found from following url =======================
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

// Updates specific task in specific list
const update = async (listId, taskId, data) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + listId + '/tasks/' + taskId

    try {
        // Sends PUT req with data in req.body to update specific task in
        // specific list
        // ===================== Found from following url =======================
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        await fetch(REQ_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) // data from param: { name: "value", completed: BOOLEAN }
        })
    } catch (err) {
        console.log(err)
    }
}

// Deletes specific task in specific list
const deleteTask = async (listId, taskId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + listId + '/tasks/' + taskId

    try {
        // Sends DELETE req using ids from REQ_URL
        // ===================== Found from following url =======================
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        await fetch(REQ_URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export {
    create, update, deleteTask
}