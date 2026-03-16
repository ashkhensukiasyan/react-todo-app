export const todoReducer = (state, action) => {
    if (action.type === "delete") {
        return state.filter(v => v.id !== action.payload)
    }
    else if (action.type === "add") {
        return [...state, { id: Date.now(), text: action.payload, isCompleted: false }]
    }
    else if (action.type === "completed") {
        return state.map(todo => {
            if (todo.id === action.payload.id) {
                return { ...todo, isCompleted: action.payload.checked }
            }
            return todo;
        })
    }
    return state;
};