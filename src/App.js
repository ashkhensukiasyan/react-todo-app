import './App.css';

import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoReducer } from './reducers/todoReducer';

import {useReducer } from "react";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 1, text: "first todo", isCompleted: false },
    { id: 2, text: "second todo", isCompleted: false },
    { id: 3, text: "third todo", isCompleted: true }
  ]);
  const completedTodos = todos.filter(todo => todo.isCompleted)

  return (
    <div className="App">
      <div className="todo-section">
        <TodoForm className="todo-form"
        newtodo={(inp) => {
          dispatch({
            type: "add",
            payload: inp,
          })
        }} />
        <TodoList
          todos={todos}
          deleteTodo={(id) => {
            dispatch({
              type: "delete",
              payload: id
            })
          }}
          changeStatus={(id, checked) => {
            dispatch({
              type: "completed",
              payload: { id, checked }
            })
          }}
        />
        <TodoFooter
          length={todos.length}
          completed={completedTodos.length} />
      </div>
    </div>
  );
}

export default App;
