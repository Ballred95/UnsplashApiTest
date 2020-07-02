import React, { useState, useEffect } from 'react' 

export default function Unsplash(props) {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://api.unsplash.com/search/photos/?client_id=HN_kjPdQ-BoIKjcaX0ItpS0T0R4_CJb2C3ZycC6pWQI&query=flower')
        .then(res => res.json())
        .then(setData)
        .catch(console.error)
    }) 
    

    if(data) {
        return(
            <div>{JSON.stringify(data)}</div>
        )
    }

    
}