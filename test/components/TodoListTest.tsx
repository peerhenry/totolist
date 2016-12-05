import { expect } from 'chai'
import * as React from 'react'
import { shallow } from 'enzyme'
import {List} from 'immutable'
import TodoList from 'components/TodoList'

describe('TodoList component', () => {

  const todoList = shallow(<TodoList 
    todos={List([{id: 1, text: 'hello', isDone: false}])} 
    onClick={(nr: number) => {}} 
    remove={(nr: number) => {}} />)

  it('should be of type ul', () => {
    expect(todoList.type()).to.equal('ul')
  })

})