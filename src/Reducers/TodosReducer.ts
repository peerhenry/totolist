import {List} from 'immutable'
import TodoModel from 'models/TodoModel'
import {CreateTodoModel} from 'models/Factory'

const ToggleReducer = (todo: TodoModel, action: any): TodoModel => {
  return (action.id === todo.id) ? {id: todo.id, text: todo.text, isDone: !todo.isDone} : todo
}

const TodosReducer = (todos: List<TodoModel>, action: any) => {
  switch(action.type){
    case 'TODOS_TOGGLE':
      return todos.map(todo => ToggleReducer(todo, action))
    case 'TODOS_ADD':
      return todos.push(CreateTodoModel(action.text, false))
    case 'TODOS_REMOVE':
      return todos.filter(todo => todo.id != action.id)
  }
  return todos
}

export default TodosReducer