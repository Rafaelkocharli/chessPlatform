import { configureStore } from '@reduxjs/toolkit'
import boardSlice from "../../features/board/model/boardSlice.ts";



export const store = configureStore({
    reducer: boardSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>;