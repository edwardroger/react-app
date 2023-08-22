import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomePage = () => {
    let data = useLocation();
    const [email, setEmail] = useState(data.state);

    return (
        <>
            {/* <h1>{ email ?? 'My Homepage' }</h1>
            <Link to='/login'>Login now</Link> */}
            <div className="container">
                <div className="row">
                    <div className="content">
                        {/* BEM: Block__Element-Modifier */}
                        <div className="content__header">
                            <img src="" alt="" />
                        </div>
                        <div className="content__body">
                            <div className="content__body-title"></div>
                            <div className="content__body-img"></div>
                        </div>
                        <div className="content__footer"></div>
                    </div>
                </div>
            </div>
            Bài tập: 
            - Dựng layout Login | Register dựa vào thư viện MUI
            hoặc Ant Design
        </>
    )
}

export default HomePage