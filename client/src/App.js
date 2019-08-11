import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Registration from './components/Registration';

import './App.css';

function App() {
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
        
        <Route path='/' exact component={Login}></Route>
        <Route path='/register' component={Registration}></Route>
      </div>
    </Router>
  );
}

export default App;
