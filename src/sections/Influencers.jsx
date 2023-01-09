import React from 'react';
import viewAllButton from '../assets/viewall-button.svg';
import '../styles/Influencers.css';
import CardInfluencers from '../components/CardInfluencers';

const Influencers = () => {
    return (
        <section className='container bg-custom-trending flex flex-col px-44 py-20 space-y-14'>
            <div className='space-y-10'>
                <p className='font-lato text-md text-white'>Watch And Follow Celebrities To Get The Best Collection Of NFTs</p>
                <div className='flex justify-between'>
                    <h1 className='font-oxanium text-6xl text-white'>Joined Influencers</h1>
                    <img src={viewAllButton} alt="" width={130} height={80} className="cursor-pointer" />
                </div>
            </div>
            <div className='flex flex-row flex-wrap gap-5'>
                <CardInfluencers />
                <CardInfluencers />
            </div>
        </section>
    );
}

export default Influencers;
