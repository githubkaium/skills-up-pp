import React from 'react';
import Error from '../../images/404_Error.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={Error} alt="Error 404" />
        </div>
    );
};

export default NotFound;