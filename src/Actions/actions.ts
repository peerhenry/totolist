let nextTodoId: number = 0
export const addTodo = (text: string) => ({
  type: "TODOS_ADD",
  id: nextTodoId++,
  text
})

export const toggle = (id: number) => ({
  type: "TODOS_TOGGLE",
  id
})

export const remove = (id: number) => ({
  type: "TODOS_REMOVE",
  id
})