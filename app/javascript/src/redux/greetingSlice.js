import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const shuruaat = "Hello World";
const nayiShuruaat = {
    message: "",
    status: false,
};

export const fetchThunk = createAsyncThunk('/fetch-greeting', async () => {
   const greeting = await (await fetch('/api/v1/greetings')).json()
   return greeting;
});

const GreetingSlice = createSlice({
    name: 'Mera Greeting Slice',
    initialState: nayiShuruaat,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchThunk.fulfilled, (state, action) => {
            const { payload } = action;
            const { greeting } = payload;
            return {
                ...state,
                message: greeting,
            };
        });
    },
});

export default GreetingSlice.reducer;