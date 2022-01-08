import React from 'react';

const Info = ({title, detail}) => {
    return(
        <div className='w-56'>
            <></>
            <p className='font-bold text-gray-800 text-base'>{title}</p>
            <p className='text-base pl-2 text-gray-500 leading-5'>{detail}</p>
        </div>
    )
}

export default Info;