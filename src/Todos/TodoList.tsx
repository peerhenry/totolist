import * as React from 'react'
import {List} from 'immutable'
import Todo from './Todo'
import TodoModel from './TodoModel'

const TodoList = ({todos, onClick, remove}) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          text={todo.text} 
          isDone={todo.isDone} 
          onClick={()=>{onClick(todo.id)}}
          remove={()=>{remove(todo.id)}}/>
      ))}
    </ul>
  )
}

export default TodoList 