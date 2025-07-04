import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Component/ProductList';
import ProductDetails from './Component/ProductDetails';
import Cart from './Component/Cart';
import AddressForm from './Component/AddressForm';
import Payment from './Component/Payment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/Product/:id" element={<ProductDetails />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/AddAddress" element={<AddressForm />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
