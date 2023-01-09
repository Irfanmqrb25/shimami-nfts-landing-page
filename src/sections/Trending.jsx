import React from 'react';
import viewAllButton from '../assets/viewall-button.svg';
import "../styles/Trending.css";
import CardTrending from '../components/CardTrending';


const Trending = () => {
    return (
        <section className='container bg-custom-trending flex flex-col px-44 py-20 space-y-14'>
            <div className='space-y-10'>
                <p className='font-lato text-md text-white'>Most Loved NFTs Of The Time</p>
                <div className='flex justify-between'>
                    <h1 className='font-oxanium text-6xl text-white'>Hot Trending NFTs</h1>
                    <img src={viewAllButton} alt="" width={130} height={80} className="cursor-pointer" />
                </div>
            </div>
            <div className='flex flex-row flex-wrap gap-5'>
                <CardTrending />
                <CardTrending />
            </div>
        </section>
    );
}

export default Trending;