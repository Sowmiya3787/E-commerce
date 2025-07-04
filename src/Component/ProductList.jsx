import React, { useState } from 'react';
import Header from './Header';
import  { products as allproducts} from '../data/mockDta'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const [filteredProducts,setFilteredProducts] = useState(allproducts);


  // const displayProduct = (id) => {
  //   navigate(`/Product/${id}`);
  // };
const onAddtocart = (product)=>{
  navigate('/Cart',{state :{product}});
}
const filterData = (value) => {
  const filterList = allproducts.filter(product =>
    product.name.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredProducts(filterList);
};
  
  return (
    <><Header filterData={filterData} />
    <h1 className='text-center'>product List</h1>
   <div className="row justify-content-center">
  {filteredProducts.map(product => (
    <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card m-3 w-100">
        <img
  src={product.imageUrl}
  className="card-img-top object-fit-cover"
  alt={product.name}
  style={{ height: '250px', width: '100%', objectFit: 'cover' }}
/>

        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <button className="btn btn-success mt-auto" onClick={() => onAddtocart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  ))}
</div>
    </>
  );
}


export default ProductList;
