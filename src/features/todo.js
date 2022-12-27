import { createSlice } from "@reduxjs/toolkit";


export const todos = createSlice({
    name:'todoList',
    initialState: { value : [{title:'Redux Practice', desc:'Hi, You have to do Redux Practice Today'}]},
    reducers:{
        add: (state,action)=>{
            state.value = [...(state.value),action.payload]
        },
        del: (state, action)=>{
            var list = state.value;
            const index = list.indexOf(action.payload);
            list.splice(index, 1);
            state.value = list;
        }
    }

})

export const { add, del } = todos.actions;

export default todos.reducer;