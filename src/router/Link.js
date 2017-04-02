import React, { Component, PropTypes } from 'react'

const historyPush = (path) => {
  history.pushState({}, null, path)
}

const historyReplace = (path) => {
  history.replaceState({}, null, path)
}

export default class Link extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    const { replace, to } = this.props
    event.preventDefault()

    replace ? historyReplace(to) : historyPush(to)
  }

  render () {
    const { to, children } = this.props

    return (
      <a href={to} onClick={this.handleClick}>
        { children }
      </a>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  replace: PropTypes.bool
}
