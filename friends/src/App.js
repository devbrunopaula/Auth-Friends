import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Subnav from './components/Subnav'
import Friends from './pages/Friends'
import Login from './pages/Login'
import PrivateRoute from './routes/PrivateRoute'
import AddFriends from './pages/AddFriends'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidebar from './pages/Sidebar'

function App(props) {
  return (
    <>
      <Navigation />

      <Row>
        <Col style={{maxWidth: '16%'}}>
          <Sidebar />
        </Col>

        <Col>
          <Subnav />
          <Switch>
            <PrivateRoute path='/add' component={AddFriends} />
            <PrivateRoute path='/friends/:id' component={Friends} />
            <PrivateRoute exact path='/friends' component={Friends} />
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Home} />
            <Route path='*' render={() => <div>404</div>} />
          </Switch>
        </Col>
      </Row>
    </>
  )
}

export default App
