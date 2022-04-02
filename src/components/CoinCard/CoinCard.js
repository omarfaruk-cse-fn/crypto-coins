import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    return (
        <div className='shadow-lg rounded-2xl w-64 p-4'>
            <Link to={`/coin-details/${coin.id}`}>
                <div className='flex gap-4 justify-between items-center'>

                    <div className='flex-shrink-0'>
                        <img className='mx-auto object-cover rounded-full h-16 w-16' src={coin.image} alt="" />
                    </div>

                    <div className=' flex-col justify-end'>
                        <h1 className='text-gray-600 font-medium'>{coin.name}</h1>
                        <p>{coin.symbol}</p>
                    </div>

                </div>

            </Link>


        </div>
    );
};

export default CoinCard;