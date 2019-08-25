import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './containers/Login';
import { Roles } from './constants/roles';
import { Users } from './constants/users';
import Registration from './containers/Registration';
import AdminDashboard from './containers/AdminDashboard';
import IntershipTable from './containers/IntershipTable';
import CrudDetails from "./CrudDetails"
import CreateCrud from './createCrud';

import './App.css';
import SuperAdminDashboard from './containers/SuperAdminDashboard';

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
      case Roles.SUADMIN:
        return <SuperAdminDashboard />;
      default:
        return null;
    }
  }

  function logOut() {
    changeUser(null);
    changeLoggedIn(false);
  }

  return (
    <Router>
      <div className='app-container'>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home </Link>
              </li>
              {/* {!user && <li>
                <Link to='/register'>Registration </Link>
              </li>} */}
            </ul>
          </nav>
          {user && <button onClick={logOut}>LogOut</button>}
        </header>
        <Route path='/' exact component={() => isLoggedIn ? getLayout() : <Login onSubmit={submit} />}></Route>
        <Route path='/register' component={Registration}></Route>
        <Route path='/crudDetails/:id' component={CrudDetails}></Route>
        <Route path='/createCrud' component={CreateCrud}></Route>
      </div>
    </Router>
  );
}

export default App;
