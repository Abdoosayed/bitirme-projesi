import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { uniqBy } from 'lodash';

const Subeler = () => {
    // تعريف مكون Card كدالة
    const Card = (props) => {
        const { item } = props;
        return (
            <div className='col-sm mb-3'>
                <div className="card" >
                    <img src="https://gastronomidergisi.com/images/haber/kahve%20dunyasi9067.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text">{item}</h5> {/* استخدم السمة item مباشرة */}
                    </div>
                </div>
            </div>
        );
    }

    const [state, setState] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('https://qr.posula.com/api/qrmenu/burfasdata');
        const data = response.data;
        const uniqueData = uniqBy(data, 'KATEGORIADI');
        setState(uniqueData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <br/>
            <h1 className="text-center">KATEGORİLER</h1>
            <br/>
            <div className='row row-cols-md-4 row-cols-sm-3'>
                {state.length > 0 && state.map((item, index) => (

                    <Card key={index} item={item.KATEGORIADI} />
                ))}
            </div>
        </>
    );
}

export default Subeler;
