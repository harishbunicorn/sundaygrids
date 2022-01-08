import React from 'react';

const Notify = ({children}) => {
    return (
        <div className='flex items-center justify-between bg-blue-50 border-2 border-blue-100 rounded-full py-2 px-3 w-80'>
            <p className='text-sm text-blue-400'>New project coming soon!</p>
            <button className="hover:bg-blue-300 bg-black text-xs hover:text-white text-white font-semibold py-1.5 px-3 rounded-full transition ease-in-out duration-500">{children}</button>
        </div>
    )
}

export default Notify;