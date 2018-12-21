import React from 'react'
import Dropdown from './Dropdown'
import {
  render,
  fireEvent,
  getByText,
  cleanup
} from 'react-testing-library'
import 'jest-dom/extend-expect'


describe('Dropdown', () => {
  afterEach(cleanup)
  
  it('does not display the options', () => {

    const {
      queryByText
    } = render(<Dropdown />)

    expect(queryByText('optionA')).toBeNull()
    expect(queryByText('optionB')).toBeNull()
    expect(queryByText('optionC')).toBeNull()
  })

  it('displays the options when click on open', () => {

    const {
      getByText,
      queryByText
    } = render(<Dropdown />)

    fireEvent.click(getByText(/open/i))

    expect(queryByText('optionA')).not.toBeNull()
    expect(queryByText('optionB')).not.toBeNull()
    expect(queryByText('optionC')).not.toBeNull()
  })

  it('hides the options when two toggles', () => {

    const {
      getByText,
      queryByText
    } = render(<Dropdown />)

    fireEvent.click(getByText(/open/i))
    fireEvent.click(getByText(/open/i))

    expect(queryByText('optionA')).toBeNull()
    expect(queryByText('optionB')).toBeNull()
    expect(queryByText('optionC')).toBeNull()
  })
})
