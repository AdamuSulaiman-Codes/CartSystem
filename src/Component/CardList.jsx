import React from 'react';
import Card from './Card';


const CardList = ({ items, onAddItem }) => {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card key={item.id} item={item} onAddItem={onAddItem}/>
      ))}
    </div>
  );
};

export default CardList;
