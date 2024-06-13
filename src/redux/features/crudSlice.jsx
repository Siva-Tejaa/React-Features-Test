import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alltodos: [],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.alltodos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.alltodos));
    },
    updatetodo: (state, action) => {
      let index = state.alltodos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      state.alltodos.splice(index, 1, action.payload);
      localStorage.setItem("todos", JSON.stringify(state.alltodos));
    },
    deletetodo: (state, action) => {
      state.alltodos = state.alltodos.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem("todos", JSON.stringify(state.alltodos));
    },
    loadFromLocalStorage: (state, action) => {
      state.alltodos = action.payload;
    },
  },
});

export const { addtodo, updatetodo, deletetodo, loadFromLocalStorage } =
  crudSlice.actions;
export default crudSlice.reducer;
