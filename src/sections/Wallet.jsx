import React from 'react';
import '../styles/Wallet.css'
import CardWallet from '../components/CardWallet';
import Metamask from '../assets/metamask.svg';
import Binance from '../assets/binance.svg';
import TrustWallet from '../assets/trust-wallet.svg';
import Alpha from '../assets/alpha.svg';
import CoinGecko from '../assets/coin-gecko.svg';


const Wallet = () => {
    return (
        <section className='bg-custom-wallet container flex flex-col px-44 py-6 space-y-20'>
            <div className='flex flex-col space-y-10'>
                <h5 className='bg-text-custom font-lato mx-auto items-center mt-5'>Trade With World's Most Trusted And Fastest Wallets</h5>
                <h1 className='text-white font-oxanium text-6xl mx-auto items-center'>Wallets We Support</h1>
            </div>
            <div className='flex flex-row justify-between'>
                <CardWallet image={Metamask} title={"Metamask"} />
                <CardWallet image={Binance} title={"Binance"} />
                <CardWallet image={TrustWallet} title={"Trust Wallet"} />
                <CardWallet image={Alpha} title={"Alpha"} />
                <CardWallet image={CoinGecko} title={"CoinGecko"} />
            </div>
        </section>
    );
}

export default Wallet;
