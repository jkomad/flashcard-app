import { useState } from 'react'
import { useDispatch } from "react-redux"
import { createCard } from "../reducers/flashcardsSlice"
import { useNavigate } from "react-router-dom"

const Admin = () => {
    const [topic, setTopic] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const flashcards = useSelector(state => state.flashcards.value)

    const handleSubmit = (event) => {
        //Update array holding data on flashcards
        event.preventDefault()
        console.log(event.target.error)
        if(event.target.question.value === null || event.target.answer.value === null || topic === null) {
            console.log('Error!')
        }
        else {
            const newCard = {}
            newCard.question = event.target.question.value
            newCard.answer = event.target.answer.value
            newCard.topic = topic
            event.target.question.value = null
            event.target.answer.value = null
            dispatch(createCard(newCard))
            navigate("/")
        }
    }

    const handleChange = (event) => {
        setTopic(event.target.value)
    }

    return (
        <div id='form'>
            <form id="new-flashcard" onSubmit={handleSubmit}>
                <input name="question" placeholder="Question..."></input>
                <input name="answer" placeholder="Answer..."></input>
                <label htmlFor="math">Math
                    <input type="radio" name="topic" value="Math" onChange={handleChange}></input>
                </label>
                <label htmlFor="science">Science
                    <input type="radio" name="topic" value="Science" onChange={handleChange}></input>
                </label>
                <label htmlFor="history">History
                    <input type="radio" name="topic" value="History" onChange={handleChange}></input>
                </label>
                <p name="error" style={{color: 'red', display: 'none'}}>Error: Invalid Entry</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Admin