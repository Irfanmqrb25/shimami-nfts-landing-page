import React from 'react';

const CardWallet = ({ image, title, alt }) => {
    return (
        <div className='card-wallet flex flex-col p-6 space-y-6 mb-16'>
            <div className='image-container p-8 rounded-full'>
                <img src={image} alt={alt} width={90} height={90} className="rounded-full" />
            </div>
            <div className='text-container mx-auto items-center'>
                <p className='text-white font-oxanium text-sm'>{title}</p>
            </div>
        </div>
    );
}

export default CardWallet;
