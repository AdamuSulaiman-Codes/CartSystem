import React, { useState } from 'react';
import CardList from './Component/CardList';
import Header from './Component/Header';

const items = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for product 1.',
    price: 19.99,
    image: 'path/to/image1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description for product 2.',
    price: 29.99,
    image: 'path/to/image2.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the description for product 3.',
    price: 39.99,
    image: 'path/to/image3.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is the description for product 4.',
    price: 49.99,
    image: 'path/to/image4.jpg',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is the description for product 5.',
    price: 59.99,
    image: 'path/to/image5.jpg',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is the description for product 6.',
    price: 69.99,
    image: 'path/to/image6.jpg',
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is the description for product 7.',
    price: 79.99,
    image: 'path/to/image7.jpg',
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is the description for product 8.',
    price: 89.99,
    image: 'path/to/image8.jpg',
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'This is the description for product 9.',
    price: 99.99,
    image: 'path/to/image9.jpg',
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'This is the description for product 10.',
    price: 109.99,
    image: 'path/to/image10.jpg',
  },
  {
    id: 11,
    name: 'Product 11',
    description: 'This is the description for product 11.',
    price: 119.99,
    image: 'path/to/image11.jpg',
  },
  {
    id: 12,
    name: 'Product 12',
    description: 'This is the description for product 12.',
    price: 129.99,
    image: 'path/to/image12.jpg',
  },
  {
    id: 13,
    name: 'Product 13',
    description: 'This is the description for product 13.',
    price: 139.99,
    image: 'path/to/image13.jpg',
  },
  {
    id: 14,
    name: 'Product 14',
    description: 'This is the description for product 14.',
    price: 149.99,
    image: 'path/to/image14.jpg',
  },
  {
    id: 15,
    name: 'Product 15',
    description: 'This is the description for product 15.',
    price: 159.99,
    image: 'path/to/image15.jpg',
  },
  {
    id: 16,
    name: 'Product 16',
    description: 'This is the description for product 16.',
    price: 169.99,
    image: 'path/to/image16.jpg',
  },
  {
    id: 17,
    name: 'Product 17',
    description: 'This is the description for product 17.',
    price: 179.99,
    image: 'path/to/image17.jpg',
  },
  {
    id: 18,
    name: 'Product 18',
    description: 'This is the description for product 18.',
    price: 189.99,
    image: 'path/to/image18.jpg',
  },
  {
    id: 19,
    name: 'Product 19',
    description: 'This is the description for product 19.',
    price: 199.99,
    image: 'path/to/image19.jpg',
  },
  {
    id: 20,
    name: 'Product 20',
    description: 'This is the description for product 20.',
    price: 209.99,
    image: 'path/to/image20.jpg',
  },
];


function App() {
  const [cardState, setCardState] = useState({
    cardCount: 0,
    itemsAddedToCartId: [],
    cartItems: [],
    totalPrice: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartCount = (id, name, price) => {
    if (!cardState.itemsAddedToCartId.includes(id)) {
      setCardState((prevState) => {
        const updatedCartItems = [...prevState.cartItems, { id, name, price, quantity: 1 }];
        const updatedTotalPrice = updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        return {
          ...prevState,
          cardCount: prevState.cardCount + 1,
          itemsAddedToCartId: [...prevState.itemsAddedToCartId, id],
          cartItems: updatedCartItems,
          totalPrice: updatedTotalPrice,
        };f
      });
    } else {
      alert("Item Already Added");
    }
  };

  const handleQuantityChange = (id, quantity) => {
    setCardState((prevState) => {
      const updatedCartItems = prevState.cartItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      );

      const updatedTotalPrice = updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      return {
        ...prevState,
        cartItems: updatedCartItems,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Header 
        itemCount={cardState.cardCount} 
        cartItems={cardState.cartItems} 
        onOpenModal={openModal}
        onCloseModal={closeModal} 
        isModalOpen={isModalOpen}
        totalPrice={cardState.totalPrice}
        onQuantityChange={handleQuantityChange}
      />
      <CardList items={items} onAddItem={handleCartCount} />
    </div>
  );
}

export default App;