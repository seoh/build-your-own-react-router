import React, { Component } from 'react'

export default class Route extends Component {
  render () {
    return (
      <span>route [{this.props.path}] </span>
    )
  }
}