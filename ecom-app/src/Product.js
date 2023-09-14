import React from 'react';
import './Product.css';

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small></small>
                <strong>{price}</strong>
            </p>
            {/* product info such as name , price */}
            <div className='product__rating'>
               {Array(rating)
               .fill()
               .map((_,i) => (
                <p>⭐</p>
               ))} 
            </div>
        </div>

        <img src={image} />{/* product image */}

        <button>Add to Basket</button>
    </div>
  )
}

export default Product;