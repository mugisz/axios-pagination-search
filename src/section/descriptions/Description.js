import React from 'react';
import { Link } from 'react-router-dom';
const Description = ({descList}) => {
    return (
        <div>
            <h1>{descList.API}</h1>
            <p>{descList.Description}</p>
            <Link className='backBTN' to="/">Back</Link>
        </div>
    );
}

export default Description;
