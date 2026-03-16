import Input from "./Input";

export default function TodoItem({ todo, deleteTodo, changeStatus }) {
    return (
        <div className="todo-item">
            <Input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(e) => changeStatus(todo.id, e.target.checked)}
            />
            <span className={todo.isCompleted ? "completed-todo" : ""}>
                {todo.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
            <hr />
        </div>
    );
}
