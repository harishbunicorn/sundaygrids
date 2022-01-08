import React from 'react';

const NavLink = ({children}) => {
    return <a className='text-bold text-gray-500 cursor-pointer text-xs font-semibold hover:text-yellow-400 transition ease-in'>{children}</a>
}

export default NavLink;