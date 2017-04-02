import React, { Component, PropTypes } from 'react'
import { register, unregister } from './instance'

const matchPath = (pathname, options) => {
  const { exact = false, path } = options

  if (!path) {
    return {
      path: null,
      url: pathname,
      isExact: true
    }
  }

  const match = new RegExp(`^${path}`).exec(pathname)

  if (!match) {
    return null
  }

  const url = match[0]
  const isExact = pathname === url

  if (exact && !isExact) {
    return null
  }

  return { path, url, isExact }
}

export default class Route extends Component {
  constructor (props) {
    super(props)

    this.handlePop = this.handlePop.bind(this)
  }

  componentWillMount () {
    addEventListener('popstate', this.handlePop)
    register(this)
  }

  componentWillUnmount () {
    unregister(this)
    removeEventListener('popstate', this.handlePop)
  }

  handlePop () {
    this.forceUpdate()
  }

  render () {
    const { path, exact, component, render } = this.props
    const match = matchPath(location.pathname, { path, exact })

    if (!match) {
      return null
    }
    if (component) {
      return React.createComponent(component, { match })
    }
    if (render) {
      return render({ match })
    }
    return null
  }
}

Route.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  Component: PropTypes.func,
  render: PropTypes.func
}
