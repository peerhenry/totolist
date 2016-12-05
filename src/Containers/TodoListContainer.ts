import {connect} from 'react-redux'
import {List} from 'immutable'
import TodoModel from 'models/TodoModel'
import TodoList from 'components/TodoList'
import {toggle} from 'actions'

const mapStateToProps = function(state){
  return {
    todos: state.get('todos')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id: number) => {
      dispatch(toggle(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)