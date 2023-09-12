import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slides/authSlide'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const authRedux = useSelector(state => state.auth)
    console.log(authRedux);

    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnchangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        const action = login({email, password})
        dispatch(action);
    }

    // check user đăng nhập. Nếu đã đăng nhập rồi thì chuyển qua page Home. 
    // Nếu user đã đăng nhập mà vẫn chuyển về trang login => redirect về Home ngay lập tức

    return (
        <>
            <Button variant="text">Hello World</Button>
            <input type="text"
                placeholder='Email'
                onChange={ e => handleOnchangeEmail(e) } />
            <br />
            <input type="password"
                placeholder='Password'
                onChange={ e => handleOnchangePassword(e) }
                />
            <br />
            <button onClick={handleSubmit}>Login</button>
            <br />
            <Link to='/register'>Register</Link>
        </>
    )
}

export default Login