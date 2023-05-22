import React from 'react';
import NotFound from '../assert/Notfound.gif'
const ErrorElement = () => {
    return (
        <div className='flex items-center justify-between object-cover'>
            <img src={NotFound} alt="" srcset="" />
        </div>
    );
};

export default ErrorElement;