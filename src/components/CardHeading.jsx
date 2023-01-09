import React from 'react';

const CardHeading = ({ image, title, price, className }) => {
    return (
        <div className={`card-heading flex flex-col p-4 space-y-2 absolute ${className}`}>
            <div>
                <img src={image} width={177.5} height={180} alt="" />
            </div>
            <div className='flex mx-auto'>
                <h5 className='text-white text-md'>{title}</h5>
            </div>
            <div className='flex mx-auto'>
                <p className='text-xs text-white'>{price}</p>
            </div>
        </div>
    );
}

export default CardHeading;
