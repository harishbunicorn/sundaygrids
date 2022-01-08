import React from 'react';

const PrimaryButton = ({children, className})=>{
    return <button className={`${className} hover:bg-transparent bg-yellow-500 text-xs hover:text-black text-white font-semibold py-1 px-6 border-2 border-yellow-500 hover:border-black rounded transition ease-in-out duration-500`}>{children}</button>
}

export default PrimaryButton;