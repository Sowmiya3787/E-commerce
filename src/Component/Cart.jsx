import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [cartDetails, setCartDetails] = useState([]);
  const [calculateTotal, setCalculateTotal] = useState(0);

  useEffect(() => {
    let parsed = [];
    const stored = localStorage.getItem('Products');

    if (stored) {
      try {
        const data = JSON.parse(stored);
        parsed = Array.isArray(data) ? data : [];
      } catch (e) {
        console.error('Invalid JSON in localStorage:', e);
        parsed = [];
      }
    }

    let updated = parsed;

    if (product) {
      const isAlreadyInCart = parsed.some(p => p.id === product.id);
      updated = isAlreadyInCart ? parsed : [...parsed, product];
      localStorage.setItem('Products', JSON.stringify(updated));
    }

    setCartDetails(updated);

    // ✅ Calculate total price
    const totalPrice = updated.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setCalculateTotal(totalPrice);
  }, [product]);

  const backToProdList = () => navigate('/');
  const addressPage = ()=>navigate('/AddAddress')

  const deleteCartItem = (id) => {
    const updatedCart = cartDetails.filter(item => item.id !== id);
    setCartDetails(updatedCart);
    localStorage.setItem('Products', JSON.stringify(updatedCart));

    // Update total after deletion
    const totalPrice = updatedCart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setCalculateTotal(totalPrice);
  };

  if (!cartDetails.length) {
    return <h2 className="text-center mt-5">No products found in cart.</h2>;
  }

  return (
   <div className="container mt-5">
  <h1 className="mb-4 text-center">Your Cart</h1>
  <div className="row">
    {cartDetails.map((product, index) => (
      <div key={index} className="col-md-6 mb-4">
        <div className="card h-100 p-3">
          <img src={product.imageUrl} alt={product.name} className="img-fluid mb-3" />
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 mt-2">
            <button className="btn btn-success" onClick={addressPage}>Proceed to Checkout</button>
            <button className="btn btn-primary" onClick={backToProdList}>Back</button>
            <button className="btn btn-warning" onClick={() => deleteCartItem(product.id)}>Delete</button>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="text-end">
    <h2>Total Price: ${calculateTotal.toFixed(2)}</h2>
  </div>
</div>

  );
}
