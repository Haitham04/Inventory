import React, { useState } from 'react';
import './ManageStock.css';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid black;
    padding: 8px;
  }
`;

const ManageStock = () => {

  const [items, setItems] = useState([]);

  const handleAddItem = () => {
  
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Item ID</th>
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
              <td>{item.quantity}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ManageStock