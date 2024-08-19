import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './Modal';
import { useContext } from 'react';
import { CartContext } from './store/CartContext';

const Header = () => {
  const {quantityChange, openModal, closeModal, isModalOpen, itemCount, cartItems, totalPrice} = useContext(CartContext);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Cart</h2>
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <div key={cartItem.id}>
                <p>{cartItem.name}</p>
                <span>${cartItem.price.toFixed(2)}</span>
                <input 
                  type="number" 
                  value={cartItem.quantity || 1} 
                  min="1"
                  onChange={(e) => quantityChange(cartItem.id, parseInt(e.target.value, 10))} 
                />
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </Modal>
      <header className="header">
        <div className="header__logo">
          <h1>YourShop</h1>
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header__cart" onClick={openModal}>
          <FaShoppingCart />
          <span className="header__cart-count">{itemCount}</span>
        </div>
      </header>
    </>
  );
};

export default Header;
