import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GetUserDetailService } from '../services/userService';
import { store } from '../redux/store'

const HomePage = () => {
    let data = useLocation();
    let [user, setUser] = useState();

    useEffect(() => {
        const token = store.getState().auth.user.accessToken
        getUserInfor(token);
    }, [])

    const getUserInfor = async (token) => {
        const result = await GetUserDetailService(token);
        try {
            setUser(result.data?.user);
        } catch (error) {
            console.log('fail');
        }
    }

    return (
        <>
            {/* <h1>{ email ?? 'My Homepage' }</h1>
            <Link to='/login'>Login now</Link> */}
            {/* { authRedux.user?.accessToken?.map(() => {

            })} */}
            { user?.name }
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