import { expect } from 'chai'
import {toggle} from 'actions'
import {remove} from 'actions'
import {add} from 'actions'

describe('toggle action function', () => {
  it('should return the correct action', () => {
    var result = toggle(234)
    expect(result.id).to.equal(234)
    expect(result.type).to.equal('TODOS_TOGGLE')
  })
})

describe('remove action function', () => {
  it('should return the correct action', () => {
    var result = remove(234)
    expect(result.id).to.equal(234)
    expect(result.type).to.equal('TODOS_REMOVE')
  })
})

describe('add action function', () => {
  it('should return the correct action', () => {
    var result = add('Smiley')
    expect(result.id).to.equal(1)
    expect(result.text).to.equal('Smiley')
    expect(result.type).to.equal('TODOS_ADD')
  })
})