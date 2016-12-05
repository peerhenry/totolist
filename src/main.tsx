import * as React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Store} from 'redux'
import {Provider} from 'react-redux'

import {fromJS} from 'immutable'
import {Map} from 'immutable'
import {List} from 'immutable'

import Title from 'components/Title'
import TodoListContainer from 'containers/TodoListContainer'
import reducer from 'reducers/combined'
import TodoModel from 'models/TodoModel'

const startingState = Map({
  todos: List<TodoModel>([
    {id:1, text:'build todolist app', isDone: false},
    {id:2, text:'typescript', isDone: true},
    {id:3, text:'unit testing', isDone: true},
    {id:4, text:'immutable', isDone: false},
    {id:5, text:'ajax', isDone: false},
    {id:6, text:'source maps', isDone: false},
    {id:7, text:'hot module reloading', isDone: false}
  ]),
  visibilityFilter: "SHOW_ALL"
})

const store: Store<{}> = createStore(reducer, startingState)

const App = () => (
  <div>
    <Title/>
    <TodoListContainer/>
  </div>
)

render(
  <Provider store={store}><App/></Provider>,
  document.getElementById("app")
)
