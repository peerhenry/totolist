import {connect} from 'react-redux'
import {add} from 'actions'
import {requestTodos} from 'actions'
import Form from 'components/Form'

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