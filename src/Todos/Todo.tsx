import * as React from 'react'

const Todo = ({isDone, text, onClick, remove}) => (
  <li
    className="list-group-item" 
    style={{lineHeight: "38px"}}
    onClick={e=>{
      e.preventDefault();
      onClick();
      }
    }
    >
    <div style={{width: "100%"}}>
      <span style={isDone? {textDecoration: "line-through"}: {}}>
      {
        text
      }
      </span>
      <button 
        className="btn btn-default" 
        style={{float: "right", fontWeight: "bold"}} 
        onClick={e=>{remove();}}>
        X
      </button>
    </div>
  </li>
)
 export default Todo