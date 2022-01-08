import React from 'react';
import Info from '../molecules/Info';

const GettingStarted = () => {
    return(
        <>
        <div className='m-6 bg-gray-100'>
            <h1 className='text-black text-xl font-bold text-center mb-12'>Getting started with Digital Solar</h1>
            <div className='flex justify-between mx-20 mb-16'>
            <Info title="1.One tap access" detail="Choose the number of Biscuits you need to offset your power bills."/>
            <Info title="2.Get clean energy credits" detail="You get energy credits for every unit of power generated from your Biscuits."/>
            <Info title="3.Save on power bills" detail="Add those credits to your electricity bill and only pay the balance, if any."/>
            </div>
        </div>
        <div className='bg-yellow-100 flex item-center justify-between py-3 px-28'>
            <div className='flex items-center w-32'>
                <p className='font-bold text-3xl mr-4 text-blue-400'>500</p>
                <p className='text-xs text-blue-400'>Biscuits subscribed</p>
            </div>
            <div className='flex items-center w-50'>
                <p className='font-bold text-3xl mr-4 text-blue-400'>7,860.6 Kwh</p>
                <p className='text-xs text-blue-400'>Clean energy<br/>delivered</p>
            </div>
            <div className='flex items-center w-50'>
                <p className='font-bold text-3xl mr-4 text-blue-400'>₹ 47,163.6</p>
                <p className='text-xs text-blue-400'>Energy credits<br/>generated</p>
            </div>
        </div>
    </>
    )
}

export default GettingStarted;