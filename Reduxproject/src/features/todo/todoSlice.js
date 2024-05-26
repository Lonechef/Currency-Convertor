import { createSlice, nanoid } from "@reduxjs/toolkit";

const intitialState ={
    todos: [{id:1, text:"Hello worls"}]
}


export const todoSlice = createSlice({
    name:'todo',
    intitialState,
    reducers:{
       addTodo : (state,action)=>{
        const todo={
            id:nanoid(),
            text:action.payload
        }
       },
       removeTodo:(state,action)=>{},

    }

})