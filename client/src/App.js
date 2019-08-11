import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './containers/Login';
import { Roles } from './constants/roles';
import { Users } from './constants/users';
import Registration from './containers/Registration';
import AdminDashboard from './containers/AdminDashboard';
import IntershipTable from './containers/IntershipTable';

import './App.css';

function App() {
  const [isLoggedIn, changeLoggedIn] = useState(false);
  const [user, changeUser] = useState(null);

  function submit(e, credentials) {
    const user = Users.find(user => user.login === credentials.login && user.pw === credentials.pw);
    if (user) {
      changeUser(user);
      changeLoggedIn(true);
    }
    e.preventDefault();
  }

  function getLayout() {
    if (!user) {
      return null;
    }
    switch (user.role) {
      case Roles.INTERN:
        return <IntershipTable />;
      case Roles.ADMIN:
        return <AdminDashboard />;
      default:
        return null;
    }
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
          {user &&  <div className='user-info'>
            <span> {user.login} </span>
            <span> {user.role} </span>
          </div>}
        </header>
        
        <Route path='/' exact component={() => isLoggedIn ? getLayout() : <Login onSubmit={submit} />}></Route>
        <Route path='/register' component={Registration}></Route>
      </div>
    </Router>
  );
}

export default App;
