import { createSlice } from '@reduxjs/toolkit'
import { eatSushi } from './sushi'

const userSlice = createSlice({
    name: "user",
    initialState: {
        funds: 100
    },
    reducers: {

    },
    extraReducers: {
        [eatSushi]: (state, action) => {
            state.funds -= action.payload.price
        }
    }
})

export default userSlice.reducer