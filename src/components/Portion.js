import React from 'react';
import Notify from '../molecules/Notify';
import PortionCard from './PortionCard';
import PortionDetails from './PortionDetails';

const Portion = () => {
    return (
        <>
        <div className='mt-8 mb-12 flex items-center justify-center'>
            <Notify children="Notify Me"/>
        </div>
        <div className='flex items-center mx-20'>
            <PortionCard/>
            <PortionDetails/>
        </div>
        </>
    )
}

export default Portion;