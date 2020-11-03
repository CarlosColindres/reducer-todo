import React from 'react'
const Todo = ({todo, finishTodo}) => {

    return (
        <p onClick={() => finishTodo(todo)} className={todo.completed ? 'finished' : ''}>{todo.todo}</p>
    )
}

export default Todo