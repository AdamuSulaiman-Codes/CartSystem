import React from 'react';
import { useContext } from 'react';
import { CartContext } from './store/CartContext';

const Card = ({ item}) => {
  const {handleAddToCart} = useContext(CartContext);

  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{item.name}</h2>
        <p className="card__description">{item.description}</p>
        <p className="card__price">${item.price}</p>
        <button className="card__button" onClick={()=>handleAddToCart(item.id, item.name, item.price)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
