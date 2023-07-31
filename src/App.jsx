import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import HomePage from './Containers/HomePage'
import Login from './Containers/Login'
import Register from './Containers/Register'

//React - Router - DOM version 6
const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/register' element={ <Register /> } />
            </Routes>
            <Link to='/login' state={{ some: "value" }}>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/'>Home</Link>
            {/* Bài tập:
            1. Tạo ra 3 pages: 
                + page: Trang chủ (Chứa màn hình chính)
                + page: profile (Chứa trang thông tin user)
                + page: Trang login (Chứa form login)
            2. Tạo ra các nút để chuyển trang (Thẻ Link được đặt trong component)
            3. Gửi thông tin: (Ví dụ, sau khi ấn login thì sẽ gửi email qua màn hình Profile) */}
        </>
    )
}

export default App