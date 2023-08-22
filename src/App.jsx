import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import HomePage from './Containers/HomePage'
import Login from './Containers/Login'
import Register from './Containers/Register'
import CallAPI from './Containers/CallAPI'
import User from './Containers/User'
import UserProfile from './Containers/UserProfile'

//React - Router - DOM version 6
const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/register' element={ <Register /> } />
                <Route path='/call-api' element={ <CallAPI /> } />
                <Route path='/user' element={ <User /> } />
                <Route path='/user-profile' element={ <UserProfile /> } />
            </Routes>
        </>
    )
}

export default App