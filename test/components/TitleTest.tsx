import * as mocha from 'mocha'
import { expect } from 'chai'
import * as React from 'react'
import { shallow } from 'enzyme'
import Title from 'components/Title'

describe('Title component', () => {

  const title = shallow(<Title/>)

  it('should render correct text', () => {
    expect(title.text()).to.equal('Look at my pretty app!')
  })

  it('should be of type h1', () => {
    expect(title.type()).to.equal('h1')
  })

})