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

// thunks

/*
export const requestTodos = () => (dispatch => {
  console.log('thunky thunky!')
  dispatch(() => ({type: "TODOS_TOGGLE", id: 1}))
})*/

export const requestTodos = dispatch => {
  console.log('thunky thunky!')
  dispatch({type: "TODOS_TOGGLE", id: 1})
}