export default function TodoFooter({ length, completed }) {
    return (
        <div className="todo-footer">
            <h3>
                {completed} / {length}
            </h3>
        </div>
    );
}
