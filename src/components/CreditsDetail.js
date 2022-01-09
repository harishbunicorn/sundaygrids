import React from 'react';
import Notify from '../molecules/Notify';

const CreditsDetail = ({value}) => {
    return (
        <div className='w-1/2 mr-12 pr-4 ml-12'>
            <h3 className='font-bold mb-4 text-xl text-white leading-5'>Plan your Credits</h3>
            <p className='text-black mb-8 font-bold text-2xl'>{value>9?'':'0'}{value} Biscuits generates around ₹{value * 1728} credits during its lifespan and offsets {value * 252} kgs of CO2</p>
            <Notify children="Notify Me"/>
        </div>
    )
}

export default CreditsDetail;