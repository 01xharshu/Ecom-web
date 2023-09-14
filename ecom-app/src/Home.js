import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img  className="home__image" src="" alt="background which fades" />
        

            <div className='home__row'>
                <Product title='' price='' image='' rating=''/>
                <Product title='' price='' image='' rating=''/>
            </div>

            <div className='home__row'>
                <Product title='' price='' image='' rating=''/>
                <Product title='' price='' image='' rating=''/>
                <Product title='' price='' image='' rating=''/>
            </div>

            <div className='home__row'>
            <Product title='' price='' image='' rating=''/>
            </div>
        </div>
    </div>
   )
}

export default  Home