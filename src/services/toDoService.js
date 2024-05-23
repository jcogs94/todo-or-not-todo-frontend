const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;


// returns all lists
const show = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data;

    } catch (err) {
        console.log(err);
    }
};

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

export {
    show, createTask
};