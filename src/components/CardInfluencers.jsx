import React from 'react';
import { influencersData } from '../utils/data';
import verifiedIcon from '../assets/verifiedicon.svg'

const CardInfluencers = () => {
    return (
        <>
            {influencersData.map((influencer) => (
                <div className='card-influencers flex flex-col p-3' key={influencer.id}>
                    <div className='flex space-x-3 mb-12'>
                        <img src={influencer.firstImage} alt="" width={140} />
                        <img src={influencer.secondImage} alt="" width={100} />
                    </div>
                    <img src={influencer.profilePict} alt="" width={70} height={70} className="absolute bottom-[80px] left-12" />
                    <div className='flex flex-row justify-between items-center mb-2'>
                        <div className='flex flex-col justify-between text-white '>
                            <div className='flex space-x-2'>
                                <h5 className='text-lg font-oxanium'>{influencer.name}</h5>
                                <img src={verifiedIcon} alt="" width={15} />
                            </div>
                            <p className='text-xs font-lato text-gray-300'>{influencer.tag}</p>
                        </div>
                        <button className='background-button px-6 py-1 text-white border rounded-[20px] border-[#F81DFB] text-sm hover:bg-[#F81DFB] hover:ease-in-out duration-500'>
                            Follow
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardInfluencers;
