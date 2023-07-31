import React, { useState } from 'react'
import ComponentA from './Components/ComponentA';

const App = () => {
  //State: Dùng để định nghĩa biến bên trong function
  const [count, setCount] = useState(0)

  //Props: Dùng để truyền biến hoặc function qua các components khác

  const increment = () => { //Arrow function
    setCount(count + 1);
  }

  const handleChange = () => {
    setCount(count - 1);
  }

  return (
    <>
      <ComponentA count={ count } handleChange={ handleChange } />
      <button onClick={ increment }>Increase</button>
    </>
  )
}

export default App