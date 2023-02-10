import { useState } from 'react'

const Flashcard = ({flashcard}) => {
    const [flippedStatus, setFlippedStatus] = useState('false')

    //Function for identifying flashcards by topic
    const assignTopicColor = (topic) => {
        switch(topic) {
            case 'Math': 
                return 'solid red 2px';
            case 'Science':
                return 'solid green 2px';
            case 'History':
                return 'solid purple 2px';
            default:
                console.log('Sorry, this is not a valid topic!')
        }
    }

    return (
        <>
        {flippedStatus ? 
        <div className='flashcard' style={{border: assignTopicColor(flashcard.topic)}} onClick={() => setFlippedStatus(!flippedStatus)}>
            <h1>{flashcard.question}</h1>
            <button className="edit-button">Edit</button>
        </div> 
        : 
        <div className='flashcard' style={{border: assignTopicColor(flashcard.topic)}} onClick={() => setFlippedStatus(!flippedStatus)}>
            <h1>{flashcard.answer}</h1>
            <button className="edit-button">Edit</button>
        </div> 
        }
        </>
    )
}

export default Flashcard