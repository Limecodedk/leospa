import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5029/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        window.location.href = '/admin';
      } else {
        setError('Login failed. Please check your email and password.');
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again later.');
    }
  };


  return (
    <section>
      <div className="loginContainer">
        <div className="loginHeader">
          <div className="loginImage">
            <img src="/public/assets/china-rose.png" alt="" />
          </div>
          <div className='loginHeading'>
            <h1>Login</h1>
            <p>Pleas login to admin dashboard</p>
          </div>
        </div>
        <form className="loginForm" onSubmit={e => handleSubmit(e)}>
          <input type="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className='btn loginBtn'>Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  )
}

export default Login