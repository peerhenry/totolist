import * as React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Store} from 'redux'
import {Provider} from 'react-redux'

import {Map} from 'immutable'
import {List} from 'immutable'

import Title from 'components/Title'
import FormContainer from 'containers/FormContainer'
import TodoListContainer from 'containers/TodoListContainer'
import reducer from 'reducers/Root'
import TodoModel from 'models/TodoModel'
import {CreateTodoModel} from 'models/Factory'

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

const store: Store<{}> = createStore(reducer, startingState)

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
