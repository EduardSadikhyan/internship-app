import React from 'react';

const Login = () => (
  <div className='login-container'>
    <form>
      <fieldset>
        <label htmlFor='login'>Login: </label>
        <input name='login' type='text' placeholder='Login'/>
      </fieldset>
      <fieldset>
        <label htmlFor='password'>Password:</label>
        <input name='password' type='password' placeholder='Password'/>
      </fieldset>
      <button type='submit'>Login</button>
    </form>
  </div>
);
  
  export default Login;