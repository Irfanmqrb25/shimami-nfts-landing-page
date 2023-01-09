import React from 'react';
import DashedLine from '../assets/dashed-line.svg';

const CardProcedure = ({ image, title, type }) => {
    return (
        <div className='flex flex-row space-x-7 mb-32'>
            <div className='flex flex-col space-y-5'>
                <div className='card-procedure rounded-full mx-auto p-5'>
                    <img src={image} alt='' width={40} height={40} />
                </div>
                <div className='text-sm text-white flex mx-auto'>
                    <p className='font-workSans'>{title}</p>
                </div>
            </div>
            {type === "end" ? '' : <div className='flex items-center'>
                <img src={DashedLine} width={120} alt="" />
            </div>}
        </div>
    );
}

export default CardProcedure;
