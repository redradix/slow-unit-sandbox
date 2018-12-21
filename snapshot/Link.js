import React from 'react'

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
}

export default class Link extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

    this.state = {
      class: STATUS.NORMAL
    }
  }

  handleMouseEnter() {
    this.setState({class: STATUS.HOVERED})
  }

  handleMouseLeave() {
    this.setState({class: STATUS.NORMAL})
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        {this.props.children}
      </a>
    )
  }
}
