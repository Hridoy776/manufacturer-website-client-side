import React, { useEffect, useState } from 'react';

const useTools = (url) => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data.reverse()))
    }, [url])
    return [tools]
        
};

export default useTools;