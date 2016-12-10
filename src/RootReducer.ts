import {Map} from 'immutable'
import TodosReducer from 'todos/TodosReducer'
import VisibilityFilterReducer from 'page/VisibilityFilterReducer'

const reducer = function(state: Map<string, any>, action: any): Map<string, any>{
  return state.set('todos', TodosReducer(state.get('todos'), action))
} 

export default reducer