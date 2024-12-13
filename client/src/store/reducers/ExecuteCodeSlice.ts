import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { executeCode } from '../action-creators/ExecuteCode.ts';

const initialState = {
    executionError: '',
    executionResult: '',
    isExecuting: false,
};

const executeCodeSlice = createSlice({
    name: 'executeCode',
    initialState,
    reducers: {
        resetExecutionState(state) {
            console.log('resetExecutionState called');

            state.executionError = '';
            state.executionResult = '';

            console.log('State after resetExecutionState:', state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(executeCode.pending, (state) => {
                console.log('executeCode.pending triggered');

                state.isExecuting = true;

                console.log('State after executeCode.pending:', state);
            })
            .addCase(executeCode.fulfilled, (state, action: PayloadAction<string>) => {
                console.log('executeCode.fulfilled triggered');
                console.log('Payload:', action.payload);

                state.isExecuting = false;
                state.executionResult = action.payload;
                state.executionError = '';

                console.log('State after executeCode.fulfilled:', state);
            })
            .addCase(executeCode.rejected, (state, action: PayloadAction<string | undefined>) => {
                console.log('executeCode.rejected triggered');
                console.log('Payload:', action.payload);

                state.isExecuting = false;
                state.executionResult = '';
                state.executionError = action.payload || '';

                console.log('State after executeCode.rejected:', state);
            });
    },
});

export const { resetExecutionState } = executeCodeSlice.actions;
export default executeCodeSlice.reducer;
