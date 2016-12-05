import {List} from 'immutable'
import TodoModel from 'models/TodoModel'

const TodoReducer = (todo: TodoModel, action: any): TodoModel => {
  return todo
}

const TodosReducer = (todos: List<TodoModel>, action: any) => {
  switch(action.type){
    case 'TOGGLE_TODO':
      return todos
    case 'ADD_TODO':
      return todos
  }
  return todos
}

export default TodosReducer