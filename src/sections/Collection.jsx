import React from 'react';
import CardCollection from '../components/CardCollection';

const Collection = () => {
    return (
        <section className='bg-custom-wallet h-[730px] container flex flex-col px-44 py-6 space-y-20'>
            <div className='flex flex-col space-y-10 mt-10'>
                <h5 className='bg-text-custom font-lato mx-auto items-center mt-5'>Explore our newly released NFT collection </h5>
                <h1 className='text-white font-oxanium text-6xl mx-auto items-center'>Our Collection</h1>
            </div>
            <CardCollection />
        </section>
    );
}

export default Collection;
