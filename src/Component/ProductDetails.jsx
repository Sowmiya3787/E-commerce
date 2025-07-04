import React from 'react'
import  { products } from '../data/mockDta'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetails() {
    const navigate = useNavigate();
    const {id} = useParams();
    const product = products.find(e =>
e.id === parseInt(id)
);
if (!product) return <h2 className="text-center mt-5">Products Not found</h2>


//Back to Product List Page

function backToProdList() {
    navigate('/')
}
 
  return (
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card p-4">
        <h2>{product.name}</h2>
       <img
  src={product.imageUrl}
  className="card-img-top object-fit-cover"
  alt={product.name}
  style={{ height: '250px', width: '100%', objectFit: 'cover' }}
/>

        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <div className="d-flex flex-column flex-md-row justify-content-around gap-2 mt-3">
          <button className="btn btn-success">Proceed to CheckOut</button>
          <button className="btn btn-secondary" onClick={backToProdList}>Back</button>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
