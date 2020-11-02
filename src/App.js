import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const initialListState = []

const App = () => {
 
  const [todos, setTodos] = useState(initialListState)

  const addTodo = (todo) => {
      setTodos(
        [...todos, 
        {
          name: todo,
          id: Math.random(),
          completed: false
          }
        ]
      )
  }

  const finishTodo = todoId => {
      setTodos(
      todos.map(item=>{
        if(item.id === todoId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    )
  }

  const clearTodos = () => {
    setTodos(
      todos.filter(item =>(!item.completed))
    )
  }

    return (
      <div className='todos-container'>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTodo={addTodo} clearTodos={clearTodos}/>
        <TodoList finishTodo={finishTodo} todoList={todos} clearTodos={clearTodos}/>
      </div>
    );
}

export default App;