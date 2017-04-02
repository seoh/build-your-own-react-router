import React from 'react'
import { Link, Route } from '../router'

const Home = () => <h2>Home</h2>

const About = () => <h2>About</h2>

const Topic = ({ topicId }) => <h3>{ topicId }</h3>

const Topics = ({ match }) => {
  const items = [
    { name: 'Rendering with React', slug: 'rendering' },
    { name: 'Components', slug: 'components' },
    { name: 'Props v. State', slug: 'props-v-state' }
  ]

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        { items.map(({ name, slug }) => (
          <li key={name}>
            <Link to={`${match.url}.${slug}`}>{ name }</Link>
          </li>
        )) }
      </ul>

      { items.map(({ name, slug }) => (
        <Route
          key={name}
          path={`${match.path}/${slug}`}
          render={() => <Topic topicId={name} />}
        />
      )) }

      <Route exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

/*
  // normally, components should be located and imported like this.
  import Home from './Home'
  import About from './About'
  import Topic from './Topic'
  import Topics from './Topics'
*/

export { Home, About, Topic, Topics }
