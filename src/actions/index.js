export const setTodo = newTodo => {
    return {type:'ADD_TODO', id:Math.random(), todo: newTodo}
}

export const handleToggle = item => {
    return {type:'TOGGLE_COMPLETE', payload:item.todo}
}

export const removeTodos = () => {
    return {type:'CLEAR_COMPLETED'}
}
