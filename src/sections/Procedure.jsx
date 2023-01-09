import React from 'react';
import '../styles/Procedure.css'
import CardProcedure from '../components/CardProcedure';
import Wallet from '../assets/wallet.svg';
import CollectionIcon from '../assets/collection-icon.svg';
import NftsIcon from '../assets/nfts-icon.svg';
import ListIcon from '../assets/list-icon.svg';


const Procedure = () => {
    return (
        <section className='bg-procedure container flex flex-col space-y-20'>
            <div className='font-oxanium text-white text-5xl flex mx-auto mt-20 opacity-90'>
                <h2>How it works</h2>
            </div>
            <div className='flex flex-row justify-between px-60'>
                <CardProcedure image={Wallet} title={"Set Up Your Wallet"} />
                <CardProcedure image={CollectionIcon} title={"Create Your Collection"} />
                <CardProcedure image={NftsIcon} title={"Add Your Nfts"} />
                <CardProcedure image={ListIcon} title={"List Them For Sale"} type={"end"} />
            </div>
        </section>
    );
}

export default Procedure;
