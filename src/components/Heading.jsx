import React from 'react';
import Button from './Button';
import ImageHeadingRight from '../assets/image-heading-right.svg'
import ImageHeadingLeft from '../assets/image-heading-left.svg'
import ImageHeadingMiddle from '../assets/image-heading-middle.svg'
import CardHeading from './CardHeading';

const Heading = () => {
    return (
        <div className='flex flex-row justify-between mt-40'>
            <div className='flex flex-col'>
                <div className='flex flex-col space-y-3 heading-text'>
                    <h1 className='text-white text-6xl'>EXPLORE, CREATE AND SELL YOUR  NFT'S  ON SHIHAMI</h1>
                    <p className='text-white'>Shihami is the World's first and largest NFT/Avatar marketplace</p>
                </div>
                <div className='flex flex-row space-x-10 mt-16'>
                    <Button text={"Explore More"} title="explore" />
                    <Button text={"Create Yours"} title="create" type="secondary" />
                </div>
            </div>
            <div className='w-10/12 flex flex-row'>
                <CardHeading
                    image={ImageHeadingLeft}
                    title={"Bleeding Ghost"}
                    price={"$ 152,793.17"}
                    className={"bottom-56 card-heading-left"}
                />
                <CardHeading
                    image={ImageHeadingRight}
                    title={"Statue Of Vughae"}
                    price={"$ 452,968.48"}
                    className={"right-20 bottom-48"}
                />
                <CardHeading
                    image={ImageHeadingMiddle}
                    title={"Living Of The Art"}
                    price={"$ 543,576.13"}
                    className={"top-48 right-56"}
                />
            </div>
        </div>
    );
}

export default Heading;
