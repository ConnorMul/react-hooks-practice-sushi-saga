import { createSlice } from "@reduxjs/toolkit";

const sushiSlice = createSlice({
    name: "Sushis",
    initialState: {
        items: [],
        currentIndex: 0
    },
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload
        },
        eatSushi: (state, action) => {
            const sushiToEat = state.items.find(sushi => sushi.id === action.payload.id)
            sushiToEat.isEaten = true
        },
        incrementCurrentIndex: (state, action) => {
            state.currentIndex += 4
        }
    }
})

export const { addItems, eatSushi, incrementCurrentIndex } = sushiSlice.actions

export default sushiSlice.reducer