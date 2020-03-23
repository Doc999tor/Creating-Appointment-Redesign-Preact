import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Counter from './Counter'
import Date from './Date'
import mainStore from '../store/mainStore'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route path='/counter' exact component={Counter} />
        <Route path='/store' exact component={Date} />
        <Redirect from='/' to='/counter' />
      </Switch>
    )
  }
}
export default observer(App)