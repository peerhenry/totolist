import * as mocha from 'mocha'
import { expect } from 'chai'
import * as React from 'react'
import { shallow } from 'enzyme'
import Todo from 'components/Todo'

describe('Todo component', () => {

  const todo = shallow(<Todo text={"hello"} isDone={false} onClick={()=>{}}/>)

  it('should be of type li', () => {
    expect(todo.type()).to.equal('li')
  })

})