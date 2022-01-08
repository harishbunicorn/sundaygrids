import React from 'react';
import Textra from 'react-textra'
import yourportion from '../YourPortionCard.png';

const PortionCard = () => {
    return(
        <div className='relative'>
        <img src={yourportion} width={450}/>
        <div className='absolute top-40 left-10 z-10'>
            <div className='flex text-sm items-center justify-between'>
                <p className='text-gray-400'>host site: <span className='font-semibold'>Bangalore</span></p>
                <p className='text-gray-400 relative mr-16'>Your Location:<span className='font-semibold absolute'><Textra effect='leftRight' data={['Bangalore', 'Kolkata', 'Mumbai', 'Pune', 'Delhi']}/></span></p>
            </div>
            <div className='p-1 bg-gray-70 shadow-inner text-white rounded-full mt-4 mb-2'></div>
            <p className='text-gray-400 text-sm font-bold'>Credits can be transferred digitally, unlike direct power <br/> that requirees a wired output</p>
        </div>
        </div>
    )
}


export default PortionCard;