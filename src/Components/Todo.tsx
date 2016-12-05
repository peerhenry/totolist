import * as React from 'react'

const Todo = ({isDone, text, onClick, remove}) => (
  <li
    className="list-group-item" 
    style={isDone? {textDecoration: "line-through"}: {}}
    onClick={e=>{
      e.preventDefault();
      onClick();
      }
    }
    >
    {
      text
    }
    <button className="btn btn-default" style={{float: "right", fontWeight: "bold"}} onClick={e=>{remove();}}>X</button>
  </li>
)
 export default Todo