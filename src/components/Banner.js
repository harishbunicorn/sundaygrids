import React from 'react';
import SecondaryButton from '../atoms/SecondaryButton';


const Banner = () => {
    return(
        <div className='h-96 px-4 bg-gray-100'>
        <div style={{ backgroundImage: "url(/GradientBlue.png)", height:"100%", backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center" }}>
                <div style={{ backgroundImage: "url(/Herofoldimage.png)", height:"100%", backgroundRepeat:"no-repeat",
                    backgroundSize:"cover", backgroundPosition:"center" }}>
                        <div className='flex flex-col flex-start w-96 p-8'>
                    <h2 className='text-3xl text-white font-bold mb-4'>Go solar from anywhere with zero installation</h2>
                    <h3 className='font-semibold text-white mb-6'>Get clean energy credits to offset your power bills with digital solar.</h3>
                    <div className="w-24">
                        <SecondaryButton children="Watch Video"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;