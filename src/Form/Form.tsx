import * as React from 'react'

const Form = ({add, ajax, pass}) => (
  <form className="form-horizontal">
    <div className="row">
      <div className="form-group">
        <label className="col-sm-2">Add todo</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" ref={ (input) => {pass(input)} }/>
        </div>
      </div>
    </div>
    <div>
      <div className="form-group">
        <button 
          className="btn btn-default"
          style={{marginRight: '5px'}}
          onClick={e => {
            e.preventDefault()
            add()
          }}>
          Add todo
        </button>
        <button 
          className="btn btn-default"
          onClick={e=>{
            e.preventDefault()
            ajax()
          }}>
          AJAX
        </button>
      </div>
    </div>
  </form>
)

export default Form