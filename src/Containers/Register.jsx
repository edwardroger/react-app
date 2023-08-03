import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <form action="">
          <input type="text" placeholder='Email' /> <br />
          <input type="password" placeholder='Password' /> <br />
          <Link to='/login'>Register</Link>
          <br />
          <Link to='/login'>Login</Link>
      </form>
    </>
  )
}

export default Register