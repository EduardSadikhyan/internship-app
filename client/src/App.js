import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './containers/Login';
import Registration from './containers/Registration';

import './App.css';

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <div className='app-container'>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/register'>Registration</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <Route path='/' exact component={() => isLoggedIn ? <div>Logged in</div> : <Login />}></Route>
        <Route path='/register' component={Registration}></Route>
      </div>
    </Router>
  );
}

export default App;
