import React, { Component } from 'react'

export default class Link extends Component {
  render () {
    return (
      <span>link {this.props.to}</span>
    )
  }
}