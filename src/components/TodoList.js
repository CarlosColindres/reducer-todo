import React from 'react'
import Todo from './Todo'

const TodoList = ({todoList, finishTodo}) => {
    
    return (
        <div>
            {todoList.map(todo => <Todo key={todo.id} todo={todo} finishTodo={finishTodo}/>)}
        </div>
    )
}

export default TodoList