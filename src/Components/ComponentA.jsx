import React from 'react'

const ComponentA = (props) => {
    const decrease = () => {
        props.handleChange();
    }

    return (
        <>
            <div>{ props.count }</div>
            <button onClick={ decrease }>Decrease</button>
        </>
    )
}

export default ComponentA