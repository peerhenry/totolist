export const add = (text: string) => ({
  type: "TODOS_ADD",
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