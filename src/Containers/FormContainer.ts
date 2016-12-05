import {connect} from 'react-redux'
import {add} from 'actions'
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
    ajax: () => {console.log('ajax called!')},
    pass: (input) => {
      todoInput = input
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)