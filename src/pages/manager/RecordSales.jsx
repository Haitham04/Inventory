import React, { useState } from 'react';
import './RecordSales.css';

const RecordSales = () => {
  const [sales, setSales] = useState([]);
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleAddSale = () => {
    const newSale = { product, quantity, price };
    setSales([...sales, newSale]);
    setProduct('');
    setQuantity('');
    setPrice('');
  };

  return (
    <div className="sales-container">
      <h2>Record Sales</h2>
      <div className="sales-form">
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAddSale}>Add Sale</button>
      </div>
      <div className="sales-list">
        <h3>Sales Records</h3>
        <ul>
          {sales.map((sale, index) => (
            <li key={index}>
              {sale.product} - {sale.quantity} units @ ${sale.price} each
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecordSales;
