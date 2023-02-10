import { configureStore } from '@reduxjs/toolkit'
import flashcardsSlice from './reducers/flashcardsSlice'

const store = configureStore({
    reducer: {
        flashcards: flashcardsSlice,
    }
})

export default store