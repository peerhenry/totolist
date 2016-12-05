import TodoModel from 'models/TodoModel'

let currentId = 1

export function CreateTodoModel(text: string, isDone: boolean): TodoModel{
  return {
    id: currentId++,
    text: text,
    isDone: isDone
  }
}