import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Friends from './pages/Friends'
import Login from './pages/Login'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friends' component={Friends} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute render={() => <div>404</div>} />
      </Switch>
    </>
  )
}

export default App
