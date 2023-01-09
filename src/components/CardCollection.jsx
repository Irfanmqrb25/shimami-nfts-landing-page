import React from 'react';
import CollectionMonkey from '../assets/collection-monkey.svg';
import CollectionAstronout from '../assets/collectionAstronout.svg';
import CollectionRider from '../assets/collectionRider.svg';
import CollectionGorilla from '../assets/collectionGorilla.svg';
import CollectionWoman from '../assets/collectionWoman.svg';
import CollectionGirl from '../assets/collectionGirl.svg';
import CollectionHuman from '../assets/collectionHuman.svg';
import '../styles/Collection.css'

const CardCollection = () => {
    return (
        <div className='carousel flex justify-center'>
            <img src={CollectionMonkey} alt="" width={300} height={300} className="card card1" />
            <img src={CollectionAstronout} alt="" width={300} height={300} className="card card2" />
            <img src={CollectionRider} alt="" width={300} height={300} className="card card3" />
            <img src={CollectionWoman} alt="" width={300} height={300} className="card card4" />
            <img src={CollectionGorilla} alt="" width={300} height={300} className="card card5" />
            <img src={CollectionHuman} alt="" width={300} height={300} className="card card6" />
            <img src={CollectionGirl} alt="" width={300} height={300} className="card card7" />
        </div>
    );
}

export default CardCollection;
