import React, { useState } from 'react';
import CreditsDetail from './CreditsDetail';

const Credits = () => {
    const [value, setValue] = useState("1");
    return (
        <div className='bg-blue-300 flex items-center flex-around p-16'>
            <div className='bg-white w-80 shadow-xl rounded-lg ml-24 p-6'>
                <p className='text-sm text-blue-400 font-semibold'><span className='underline text-gray-500'>Enter your bill below</span> and use the slider to calculate the Biscuits you need.</p>
                <div className='flex justify-between mt-4 mr-4'>
                    <div>
                        <p className='text-xs text-gray-400 mb-2 ml-2'>Add Monthly Bill (₹)</p>
                        <input type="text" placeholder='Bill to offset' className='px-4 w-32 text-xs py-1 outline-none border-2 border-black rounded-lg'/>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400 mb-2'>No. of Biscuits</p>
                        <p className='font-bold'>{value>9?'':'0'}{value} BSQT</p>
                    </div>
                </div>
                <input className='form-range appearance-none w-full h-0.5 p-0 bg-black focus:outline-none focus:ring-0 focus:shadow-none' type="range" min="1" max="100" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <div className='flex mt-3'>
                    <div>
                        <p className='text-xs text-gray-400'>Monthly Credits</p>
                        <p className='font-bold'>₹ {value * Math.round(7.2*10)/10}</p>
                    </div>
                    <div className='ml-20'>
                        <p className='text-xs text-gray-400'>Offset</p>
                        <p className='font-bold'>--% of bill</p>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <div>
                        <p className='text-xs text-gray-400'>Full Term Credits</p>
                        <p className='font-bold'>₹ {value * 1728}</p>
                    </div>
                    <div className='ml-20'>
                        <p className='text-xs text-gray-400'>Power Produced</p>
                        <p className='font-bold'>{1.2 * Math.round(value * 10)/10} Kwh</p>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <div>
                        <p className='text-xs text-gray-400'>Solar Credit Rate<br/><span className='font-semibold'>₹ 6/kWh</span></p>
                    </div>
                    <div className='ml-20'>
                        <p className='text-xs text-gray-400'>Purchase Cost</p>
                        <p className='font-bold'>₹ {600 * value}</p>
                    </div>
                </div>
            </div>
            <CreditsDetail value={value}/>
        </div>
    )
}

export default Credits;