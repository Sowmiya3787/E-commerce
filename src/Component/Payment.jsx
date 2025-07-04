import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const navigate = useNavigate()
  const location = useLocation();
  const total = location.state?.total || 0;
  const amountInPaise = Math.round(total * 100); // Convert to paise

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const payNow = () => {
    const options = {
      key: 'rzp_test_GWgHILqvVoPEON', // Replace with your Razorpay Test Key
      amount: amountInPaise,
      currency: 'INR',
      name: 'E-CART Store',
      description: 'Test Payment',
      image: 'https://yourdomain.com/logo.png',
      handler: function (response) {
        alert('✅ Payment Successful!');
        alert('Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
function backToProdList() {
    navigate('/')
}
  return (
    <div className="container mt-5 text-center">
      <h2>Proceed with Payment</h2>
      <p><strong>Total Amount:</strong> ₹{total.toFixed(2)}</p>
      <div className='d-flex gap-3'>
         <button className="btn btn-success px-4 py-2" onClick={payNow}>
        Pay Now ₹{total.toFixed(2)}
      </button>
       <button className="btn btn-secondary" onClick={backToProdList}>Back</button>
      </div>
     
    </div>
  );
}
