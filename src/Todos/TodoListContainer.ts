import {connect} from 'react-redux'
import {List} from 'immutable'
import TodoModel from './TodoModel'
import TodoList from './TodoList'
import {toggle} from './TodoActions'
import {remove} from './TodoActions'

const mapStateToProps = function(state){
  return {
    todos: state.get('todos')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id: number) => {
      dispatch(toggle(id))
    },
    remove: (id: number) => {
      dispatch(remove(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)