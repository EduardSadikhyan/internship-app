import React, { useState } from 'react';

export default function Login({ onSubmit }) {
  const [login, changeLogin] = useState('');
  const [pw, changePw] = useState('');
  return (
    <div className='login-container'>
      <form onSubmit={(e) => onSubmit(e, { login, pw })}>
        <fieldset>
          <label htmlFor='login'>Login: </label>
          <input
            name='login'
            value={login}
            type='text'
            placeholder='Login'
            onChange={(e) => changeLogin(e.currentTarget.value)}/>
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            name='password'
            value={pw}
            type='password'
            placeholder='Password'
            onChange={(e) => changePw(e.currentTarget.value)}/>
        </fieldset>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
