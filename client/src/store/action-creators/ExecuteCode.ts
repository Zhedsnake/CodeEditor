import { createAsyncThunk } from "@reduxjs/toolkit";
import CodeService from "../../api/CodeService.ts";

export const executeCode = createAsyncThunk<
    string,
    { language: string; code: string },
    { rejectValue: string }
>(
    "executeCode/run",
    async ({ language, code }, thunkAPI) => {
        try {
            const payload = { language, code };

            console.log("executeCode action payload", payload);
            const response = await CodeService.executeCode(payload);

            if (response) {
                return response
            } else {
                return thunkAPI.rejectWithValue(
                    `Invalid response structure: ${JSON.stringify(response)}`
                );
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
