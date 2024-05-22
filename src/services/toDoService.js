const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/task`;


const show = async (task) => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        console.log('Data:', data)
        return data;

    } catch (err) {
        console.log(err);
    }
};

export { show };