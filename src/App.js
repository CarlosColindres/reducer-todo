import React, {useReducer} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import { reducer } from './reducers';
import {setTodo, handleToggle, removeTodos} from './actions'

const App = () => {
 
  const [state, dispatch] = useReducer(reducer, [])
  console.log(state)
  const addTodo = (todo) => {
      dispatch(setTodo(
        todo
      ))
  }

  const finishTodo = todoId => {
      dispatch(handleToggle(
      todoId
    ))
  }

  const clearTodos = () => {
    dispatch(removeTodos())
  }

    return (
      <div className='todos-container'>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTodo={addTodo} clearTodos={clearTodos}/>
        <TodoList finishTodo={finishTodo} todoList={state} clearTodos={clearTodos}/>
      </div>
    );
}

export default App;