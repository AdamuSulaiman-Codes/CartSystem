import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { CartContext } from './store/CartContext';

const CardList = () => {
  const {items} = useContext(CartContext);

  return (
    <div className="card-list">
      {items.map((item) => (
        <Card key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default CardList;
