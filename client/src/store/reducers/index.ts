import {combineReducers} from "@reduxjs/toolkit";
import ExecuteCodeSlice from "./ExecuteCodeSlice.ts";


export const rootReducer = combineReducers({
    codeExecution: ExecuteCodeSlice,
})

export type RootState = ReturnType<typeof rootReducer>
