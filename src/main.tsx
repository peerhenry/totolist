import * as React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Store} from 'redux'
import {applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import {Map} from 'immutable'
import {List} from 'immutable'

import Title from 'page/Title'
import FormContainer from 'form/FormContainer'
import TodoListContainer from 'todos/TodoListContainer'
import reducer from './RootReducer'
import TodoModel from 'todos/TodoModel'
import {CreateTodoModel} from 'todos/TodoModelFactory'

const startingState = Map({
  todos: List<TodoModel>([
    CreateTodoModel('build todolist app', false),
    CreateTodoModel('typescript', true),
    CreateTodoModel('unit testing', false),
    CreateTodoModel('immutable', false),
    CreateTodoModel('ajax', false),
    CreateTodoModel('source maps', false),
    CreateTodoModel('hot module reloading', false)
  ]),
  visibilityFilter: "SHOW_ALL"
})

const middleWare = applyMiddleware(thunk)
const store: Store<{}> = createStore(reducer, startingState, middleWare)

const App = () => (
  <div>
    <Title/>
    <FormContainer/>
    <TodoListContainer/>
  </div>
)

render(
  <Provider store={store}><App/></Provider>,
  document.getElementById("app")
)
