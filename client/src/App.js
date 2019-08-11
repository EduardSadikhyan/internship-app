import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './containers/Login';
import Registration from './containers/Registration';
import IntershipTable from './containers/IntershipTable';

import './App.css';

function App() {
  const [isLoggedIn, changeLoggedIn] = useState(false);

  function submit(e, credentials) {
    if (credentials.login === 'edo-intern' && credentials.pw === '7777') {
      changeLoggedIn(true);
    }
    e.preventDefault();
  }

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
        
        <Route path='/' exact component={() => isLoggedIn ? <IntershipTable /> : <Login onSubmit={submit} />}></Route>
        <Route path='/register' component={Registration}></Route>
      </div>
    </Router>
  );
}

export default App;
