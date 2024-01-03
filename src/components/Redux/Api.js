import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk('fetchApi', async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json()
    // const data = await res.json();
    // console.log('api response',data)
    // // return data;
    // return data;
})
const apiSlice = createSlice({
    name:'api',
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending, (state,action)=>{
            state.isLoading = true;
            state.data = action.payload;
            state.isError = false;
            
        });
        builder.addCase(fetchApi.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false;
        });
        builder.addCase(fetchApi.rejected, (state,action)=>{
            console.log("Error" , action.payload)
            state.isLoading = false;
            state.data = action.payload;
            state.isError = true;
        });
    },
     
})

export default apiSlice.reducer