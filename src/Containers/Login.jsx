import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const Login = () => {
    const [email, setEmail] = useState('');

    const handleOnchange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <Button variant="text">Hello World</Button>
            <form action="">
                <input type="text"
                    placeholder='Email'
                    onChange={ e => handleOnchange(e) } />
                <br />
                <input type="password"
                    placeholder='Password' />
                <br />
                <Link to='/' state={email}>
                    Login
                </Link>
                <br />
                <Link to='/register'>Register</Link>
            </form>
        </>
    )
}

export default Login