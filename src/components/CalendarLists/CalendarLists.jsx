import { useState } from "react"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarLists.css'

const CalendarLists = () => {
    const [value, setValue] = useState(new Date())

    const calendarChangeHandler = (nextValue) => {
        setValue(nextValue)
    }

    return <>
        <div id="calendar-container">
        <Calendar onChange={calendarChangeHandler} value={value} />
        <div id="calendar-day">
            
        </div>
        </div>
    </>
}

export default CalendarLists
