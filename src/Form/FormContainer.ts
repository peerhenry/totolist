import {connect} from 'react-redux'
import {add} from 'todos/TodoActions'
import {requestTodos} from 'todos/TodoActions'
import Form from './Form'

let todoInput;

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      if(todoInput.value){
        dispatch(add(todoInput.value))
        todoInput.value = ""
      }
    },
    ajax: () => {
      dispatch(requestTodos)
    },
    pass: (input) => {
      todoInput = input
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)