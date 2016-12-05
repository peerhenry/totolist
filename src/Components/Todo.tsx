import * as React from 'react'

const Todo = ({isDone, text, onClick}) => (
  <li 
    style={isDone? {textDecoration: "line-through"}: {}}
    onClick={e=>{
      e.preventDefault();
      onClick();
      }
    }
    >
    {text}
  </li>
)
 export default Todo