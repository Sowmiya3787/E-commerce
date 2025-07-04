import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AddressForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    State: '',
    Country: '',
    zipCode: '',
  });
 const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Save form data to display in card
    setFormData({                // Optional: reset form
      firstName: '',
      lastName: '',
      streetAddress: '',
      State: '',
      Country: '',
      zipCode: '',
    });
  };

function backToProdList() {
    navigate('/')
}
  const onPayment = ()=>{
    const stored = JSON.parse(localStorage.getItem('Products') || '[]');
  const total = stored.reduce((sum, item) => sum + parseFloat(item.price), 0);
  navigate('/Payment', { state: { total } });
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shipping Address</h2>
    <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-6 mb-3">
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="streetAddress">Street Address</label>
    <input type="text" id="streetAddress" className="form-control" value={formData.streetAddress} onChange={handleChange} />
  </div>

  <div className="row">
    <div className="col-md-6 mb-3">
      <label htmlFor="State">State</label>
      <input type="text" id="State" className="form-control" value={formData.State} onChange={handleChange} />
    </div>
    <div className="col-md-6 mb-3">
      <label htmlFor="Country">Country</label>
      <input type="text" id="Country" className="form-control" value={formData.Country} onChange={handleChange} />
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="zipCode">Zip Code</label>
    <input type="text" id="zipCode" className="form-control" value={formData.zipCode} onChange={handleChange} />
  </div>
<div className='d-flex gap-3'>
   <button type="submit" className="btn btn-primary">Submit</button>
   <button className="btn btn-secondary" onClick={backToProdList}>Back</button>
</div>
 
</form>


      {/* Display card if data is submitted */}
      {submittedData && (
        <div className="card mt-5 p-4">
          <h4>Submitted Address</h4>
          <p><strong>Name:</strong> {submittedData.firstName} {submittedData.lastName}</p>
          <p><strong>Street:</strong> {submittedData.streetAddress}</p>
          <p><strong>State:</strong> {submittedData.State}</p>
          <p><strong>Country:</strong> {submittedData.Country}</p>
          <p><strong>Zip Code:</strong> {submittedData.zipCode}</p>
         
           <div className='d-flex gap-3'>
             <button type="submit" className="btn btn-primary" onClick={()=>{onPayment()}}>Continue Payment</button>
           <button className="btn btn-secondary" onClick={backToProdList}>Back</button>
           </div>
        </div>
       
      )}
    </div>
  );
}
