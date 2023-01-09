import React from 'react';
import { trendingData } from '../utils/data';
import buyButton from '../assets/buy-button.svg'
import fireEmoji from "../assets/fireEmoji.svg"
import ethIcon from '../assets/ethicon.svg'
import { FcLike } from "react-icons/fc"

const CardTrending = () => {
    return (
        <>
            {trendingData.map((trending) => (
                <div className='card-trending p-3 flex flex-col' key={trending.id}>
                    <div>
                        <img src={trending.imageUrl} alt="" width={250} height={250} />
                        <div className='flex space-x-1 items-center card-like p-2 absolute top-3 right-3'>
                            <FcLike className="" />
                            <p className='text-white font-oxanium text-xs'>{trending.like}</p>
                        </div>
                    </div>
                    <div className='p-2'>
                        <div className='flex flex-row space-x-3 mt-4 items-center'>
                            <img src={trending.profilePict} alt="" />
                            <div className='flex flex-col'>
                                <h5 className='text-lg text-white font-oxanium'>{trending.name}</h5>
                                <p className='text-xs font-lato text-gray-300'>{trending.owner}</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <div className='flex flex-row items-center space-x-2'>
                                <p className='text-white font-oxanium text-sm'>On Sale</p>
                                <img src={fireEmoji} alt="" width={15} height={15} />
                            </div>
                            <div className='flex space-x-1'>
                                <img src={ethIcon} alt="" width={16} height={16} />
                                <h5 className='text-white text-base font-oxanium'>{trending.price} ETH</h5>
                            </div>
                        </div>
                        <div className='text-xs font-oxanium text-white flex justify-end mb-6'>
                            <p>($ {trending.inDollar})</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={buyButton} alt="" width={200} height={200} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardTrending;
