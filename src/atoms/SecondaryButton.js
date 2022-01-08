import React from 'react';

const SecondaryButton = ({children})=>{
    return <button className="hover:bg-gray-600 bg-white text-xs hover:text-white text-gray-400 font-semibold py-1.5 px-3 rounded transition ease-in-out duration-500">{children}</button>
}

export default SecondaryButton;