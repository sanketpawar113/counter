import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0,
    },
    reducers:{
        increment:(status)=>{
            status.value += 1;
        },
    }
})

export const {increment} = counterSlice.actions;
export default counterSlice.reducer;