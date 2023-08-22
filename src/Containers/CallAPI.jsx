import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CallAPI = () => {
    const [text, setText] = useState();

    useEffect(() => { //component did mount 
        callApi();
    }, []);

    const callApi = async () => {
        const result = await axios.get(`http://localhost:8080/hello-world`);
        setText(result.data.name)
    }

    return (
        <div>{ text }</div>
    )
}

export default CallAPI