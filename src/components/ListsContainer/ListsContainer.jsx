import ListCard from './ListCard/ListCard.jsx'
import './ListsContainer.css'

const ListsContainer = () => {
    return (
        <>
            <div id="lists-container">
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
            </div>
        </>
    )
}

export default ListsContainer
