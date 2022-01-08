import React from 'react';
import Notify from '../molecules/Notify';

const CreditsDetail = ({value}) => {
    return (
        <div className='w-80 ml-12'>
            <h3 className='font-bold mb-4 text-2xl text-white leading-5'>Plan your Credits</h3>
            <p className='text-black mb-8 font-bold text-3xl'>{value>9?'':'0'}{value} Biscuits generates around ₹{value * Math.round(7.2*10)/10} credits during its lifespan and offsets {value * 252} kgs of CO2</p>
            <Notify children="Notify Me"/>
        </div>
    )
}

export default CreditsDetail;