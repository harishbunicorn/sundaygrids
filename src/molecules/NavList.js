import React from 'react';
import NavLink from '../atoms/NavLink';

const NavList = ({links}) => {
    return (
        <ul className='flex space-x-8'>{links.map(li=><li className='list-none'><NavLink children={li}/></li>)}</ul>
    )
}

export default NavList;