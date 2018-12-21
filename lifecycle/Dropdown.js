import React from 'react'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      expanded: false,
      options: [
        'optionA',
        'optionB',
        'optionC'
      ]
    }
  }

  handleToggle() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Open</button>
        { this.state.expanded &&
          <ul id='options'>
            { this.state.options.map(option =>
              <li key={option}>{option}</li>
            )}
          </ul>
        }
      </div>
    )
  }
}
