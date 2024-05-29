import { useState } from "react"
import ListCard from "../ListsContainer/ListCard/ListCard.jsx"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarLists.css'

const CalendarLists = ({ deleteList }) => {
    const [value, setValue] = useState(new Date())
    const [dayList, setDayList] = useState({})

    const calendarChangeHandler = (nextValue) => {
        setValue(nextValue)
    }

    return <>
        <div id="calendar-container">
            <Calendar onChange={calendarChangeHandler} value={value} />
            <div id="calendar-day">
                <ListCard toDoList={dayList} deleteList={deleteList} />
            </div>
        </div>
    </>
}

export default CalendarLists
