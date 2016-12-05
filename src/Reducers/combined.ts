import {combineReducers} from 'redux'
import {Map} from 'immutable'
import TodosReducer from './TodosReducer'
import VisibilityFilterReducer from './VisibilityFilterReducer'

const reducer = function(state: Map<string, any>, action: any): Map<string, any>{
  return state.set('todos', TodosReducer(state.get('todos'), action))
} 

export default reducer