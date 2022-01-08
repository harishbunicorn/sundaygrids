import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton';
import NavList from '../molecules/NavList';

const NavBar = ({logo}) => {
    let links = ["How it works", "Using Credits", "Projects", "About Us"]
    return (
        <div className='sticky top-0 z-20'>
    <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
        <img src={logo} width={150}/>
        <div className='flex items-center'>
        <NavList links={links}/>
        <PrimaryButton children="Sign In" className="ml-6"/>
        </div>
    </div>
    <p className='text-center py-1.5 text-sm text-gray-700 bg-white cursor-pointer'>
<span className='font-semibold'>Our first system is fully subscribed!</span> 🎉 Get notified when next project goes live →</p>
    </div>)
}

export default NavBar;