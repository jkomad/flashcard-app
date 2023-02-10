import { createSlice } from '@reduxjs/toolkit'
import { flashcards } from '../data'
console.log(flashcards)

const initialState = {
    value: flashcards
}

const flashcardsSlice = createSlice({
    name: 'flashcards',
    initialState,
    reducers: {
        createCard: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { flipCard, createCard } = flashcardsSlice.actions

export default flashcardsSlice.reducer