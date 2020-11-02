import React, { useState } from 'react'

const TodoForm = ({addTodo, clearTodos}) => {
    
    const [newTodo, setNewTodo] = useState('')

    const onChange = (e) => {
        setNewTodo(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
         addTodo(newTodo)
        setNewTodo('')
    }

        return (
            <div>
                <form onSubmit={formSubmit}>
                    <input 
                    type="text" 
                    name="todo"
                    placeholder='Add todo'
                    value= {newTodo}
                    onChange={onChange}
                    />
                    <button>Add Todo</button>
                    <button onClick={clearTodos}>Clear Completed</button>
                </form>
            </div>
        )
}

export default TodoForm