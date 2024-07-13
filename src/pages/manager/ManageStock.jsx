import React, { useState } from 'react';
import './ManageStock.css';

const ManageStock = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const addItem = () => {
    if (itemName && itemQuantity) {
      setItems([...items, { name: itemName, quantity: itemQuantity }]);
      setItemName('');
      setItemQuantity('');
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="manage-stock-container">
      <h1>Manage Stock</h1>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div className="stock-list">
        <h2>Current Stock</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item.name}:</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(index, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageStock;
