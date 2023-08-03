import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomePage = () => {
    let data = useLocation();
    const [email, setEmail] = useState(data.state);

    return (
        <>
            <h1>{ email ?? 'My Homepage' }</h1>
            <Link to='/login'>Login now</Link>
        </>
    )
}

export default HomePage