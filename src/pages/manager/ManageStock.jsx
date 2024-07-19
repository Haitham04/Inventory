import React, { useState } from 'react';
import './ManageStock.css';

// const Table = styled.table`
//  

//   th, td {
//     
//     ;
//   }
// `;

const ManageStock = () => {

  const [items, setItems] = useState([]);

  const handleAddItem = () => {
  
  };

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={{border: "1px solid black", padding: "8px" }}>Item ID</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{stock.quantity}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ManageStock