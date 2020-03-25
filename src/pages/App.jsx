import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Counter from './Counter'
import Date from './Date'
@withRouter
class App extends Component {
  render () {
    const { location } = this.props
    return (
      <Switch location={location}>
        <Route path='/counter' exact component={Counter} />
        <Route path='/store' exact component={Date} />
        <Redirect from='/' exact to='/counter' />
      </Switch>
    )
  }
}
export default App