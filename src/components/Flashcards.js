import { useSelector } from 'react-redux'
import Flashcard from './Flashcard'
import {v4 as uuidv4} from 'uuid'

//Set up reducers that will change the state of these flashcards

const Flashcards = () => {
    const flashcards = useSelector(state => state.flashcards.value)

    return (
        <div className="flashcards">
            {flashcards.map((flashcard) => {
                return (
                    <Flashcard key={uuidv4()} flashcard={flashcard}/>
                )
            })}
        </div>
    )   
}

export default Flashcards