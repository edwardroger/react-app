import React, { useState, useEffect } from 'react'
import { GetListUserService } from '../services/userService'

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let result = await GetListUserService();
      setUsers(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {
        users && users.map(user => {
          return (
            <div>
              <p>Name: { user.name }</p>
              <p>Age: { user.age }</p>
            </div>
          )
        })
      }
    </>
  )
}

export default User