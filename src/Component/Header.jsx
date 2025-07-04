import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header({filterData}) {
  const navigate = useNavigate()
const [filterText, setFilterText] = useState('');

const onAddtocart = ()=>{
  navigate('/Cart');
}

  return (
    <div className="d-flex justify-content-around align-items-center bg-dark text-white p-3">
      <h1 className="mb-0">E-CART</h1>
        <div className="input-group w-25">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Name"
          aria-label="Search products" value={filterText} onChange={(e)=>{setFilterText(e.target.value);filterData(e.target.value)}}
        />
        <span className="input-group-text bg-white">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <button className="btn btn-primary" onClick={()=>onAddtocart()}>
        <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
        Cart
      </button>
    </div>
  );
}

export default Header;
