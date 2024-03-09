import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Itemcard from "./Itemcard";

const FetchAxios = () => {
    const [state, setstate] = useState([])

    const fetchAxois = async () => {
        const res = await axios.get('https://qr.posula.com/api/qrmenu/burfasdata')

        setstate(res.data)
    }

    useEffect(() => {
        fetchAxois();
    }, [])


    return (
        <div className='row row-col-sm-5' >
            {state.length > 0 && state.map((item, index) => (
                <Itemcard key={index} item={item}/>
            ))}

        </div>
    )
}

export default FetchAxios
