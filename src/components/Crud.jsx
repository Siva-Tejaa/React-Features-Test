import React, { useState, useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

import {
  addtodo,
  updatetodo,
  deletetodo,
  loadFromLocalStorage,
} from "../redux/features/crudSlice";

const Crud = () => {
  const initialStates = {
    title: "",
    description: "",
  };

  const [todo, setTodo] = useState(initialStates);

  const [isUpdate, setIsUpdate] = useState(false);

  const { title, description } = todo;

  //redux
  const alltodos = useSelector((state) => state.crud.alltodos);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addtodo({ ...todo, id: Date.now() }));
    setTodo(initialStates);
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updatetodo(todo));
    setIsUpdate(false);
    setTodo(initialStates);
  };

  const onUpdateClick = (todotoUpdate) => {
    setIsUpdate(true);
    setTodo(todotoUpdate);
  };

  const deleteHandler = (todoToDelete) => {
    dispatch(deletetodo(todoToDelete));
  };

  // useEffect(() => {
  //   let localTodos = JSON.parse(localStorage.getItem("todos"));

  //   if (localTodos?.length > 0) {
  //     dispatch(loadFromLocalStorage(localTodos));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(alltodos));
  // }, [alltodos]);

  return (
    <div>
      <h3>CRUD Operations</h3>

      <br />

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
        onSubmit={isUpdate ? updateTodoHandler : addTodoHandler}
      >
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={changeHandler}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={changeHandler}
          required
        ></textarea>
        <button type="submit">{isUpdate ? "UpdateTodo" : "Add Todo"}</button>
      </form>
      <br />
      <br />
      <br />
      <hr />
      <div>
        {alltodos?.map((todo) => (
          <div key={todo?.id}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <br />
            <button onClick={() => onUpdateClick(todo)}>
              Update Todo
            </button>{" "}
            &nbsp;
            <button onClick={() => deleteHandler(todo)}>Delete Todo</button>
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Crud);
