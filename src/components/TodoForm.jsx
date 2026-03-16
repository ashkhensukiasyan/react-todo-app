import { useState } from "react";
import Input from "./Input";

export default function TodoForm({ newtodo }) {
    const [input, setInput] = useState("");

    return (
        <form className="todo-form">
            <Input
                type="text"
                placeholder="Enter todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    if (input.trim()) {
                        newtodo(input);
                        setInput("");
                    }
                }}
            >Add
            </button>
        </form>
    );
}
