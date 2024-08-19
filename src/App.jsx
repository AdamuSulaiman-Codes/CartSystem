import CartContextProvider from './Component/store/CartContext';
import CardList from './Component/CardList';
import Header from './Component/Header';

function App() {
  
  return (
    <CartContextProvider>    
      <div className="App">
        <Header/>
        <CardList/>
      </div>
    </CartContextProvider>
  );
}

export default App;