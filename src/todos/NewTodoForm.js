import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "./actions";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue(""); //toclear
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

// object that represents entire redux state. Take state object and return another object containing pieces of theat state object
const mapStateToProps = (state) => ({
  todos: state.todos,
});

//it takes dispatch, function that allow components to trigger actions that redux store responds to
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
