import * as React from 'react'

const Form = () => (
  <form action="">
    <div className="form-group">
      <label>Add todo</label>
      <input type="text" className="form-control"/>
    </div>
    <button className="btn btn-default">Add todo</button>
    <button className="btn btn-default">Load todos AJAX</button>
  </form>
)

export default Form