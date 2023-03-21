import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

export const fetchLogs = createAsyncThunk('slice/fetch', async (values) => {
    try {
        const response = await fetch(`${process.env.SERVER_URL}/logs`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
        const logs = await response.json()
        return logs

    } catch (error) {
        throw Error(error)
    }
})

const initialState = {
    logs: [],
    loading: false,
    error: null,
}

const logsSlice = createSlice({
    name: 'logs',
    initialState,
    extraReducers: {
        [fetchLogs.pending]: (state) => {
            state.loading = true
            state.error = null;
        },
        [fetchLogs.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        [fetchLogs.fulfilled]: (state, action) => {
            state.logs = action.payload.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));
            state.loading = false;
            state.error = null;
        }
    }
})

export default logsSlice.reducer;