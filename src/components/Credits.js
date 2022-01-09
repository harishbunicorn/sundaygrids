import React, { useState } from 'react';
import CreditsCard from '../organisms/CreditsCard';
import CreditsDetail from '../organisms/CreditsDetail';

const Credits = () => {
    const [value, setValue] = useState("1");
    function handleValue(e){
        return setValue(e.target.value)
    }
    return (
        <div className='bg-purple-primary flex items-center justify-center flex-around py-16 pl-40 pr-24'>
            <CreditsCard value={value} handleValue={handleValue}/>
            <CreditsDetail value={value}/>
        </div>
    )
}

export default Credits;