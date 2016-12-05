import * as React from 'react'
import {List} from 'immutable'
import Todo from 'components/Todo'
import TodoModel from 'models/TodoModel'

const TodoList = ({todos, onClick}) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          text={todo.text} 
          isDone={todo.isDone} 
          onClick={()=>{onClick(todo.id)}}/>
      ))}
    </ul>
  )
}

export default TodoList 