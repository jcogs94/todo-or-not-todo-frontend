const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

// Returns all lists
const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// "Show" data for specific list
const show = async (listId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + listId

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Creates new list
const create = async (newListName) => {
    // Defines data to be sent
    const data = {
        name: newListName,
    }

    try {
        // Sends POST req with data in req.body to create new list
        // ===================== Found from following url =======================
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        
        // Defines an object with json response from server
        // (the new list) and returns it
        const createdList = await res.json();
        return createdList;
    } catch (err) {
        console.log(err)
    }
}

// Updates specific list's name
const update = async (listId, data) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + listId

    try {
        // Sends PUT req with data in req.body to update specific list
        // ===================== Found from following url =======================
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        await fetch(REQ_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) // data from param: { name: "value" }
        })
    } catch (err) {
        console.log(err)
    }
}

// Deletes specific list
const deleteList = async (listId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + '/' + listId

    try {
        // Sends DELETE req with data in req.body to delete specific list
        // ===================== Found from following url =======================
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const res = await fetch(REQ_URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        
        // Defines an object with json response from server
        // (the deleted list) and returns it
        const deletedList = await res.json();
        return deletedList;
    } catch (err) {
        console.log(err)
    }
}


export {
    index, show, create,
    deleteList, update
};