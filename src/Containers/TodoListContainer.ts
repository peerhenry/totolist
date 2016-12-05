import {connect} from 'react-redux'
import {List} from 'immutable'
import TodoModel from 'models/TodoModel'
import TodoList from 'components/TodoList'
import {toggle} from 'actions'
import {remove} from 'actions'

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