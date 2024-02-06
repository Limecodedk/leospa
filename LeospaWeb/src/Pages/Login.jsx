import React from 'react'

const Login = () => {
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
        <form action="" className="loginForm">
          <input type="email" name="email" placeholder='Email' />
          <input type="password" name="password" placeholder='Password' />
          <button type='submit' className='btn loginBtn'>Login</button>
        </form>
      </div>

    </section>
  )
}

export default Login