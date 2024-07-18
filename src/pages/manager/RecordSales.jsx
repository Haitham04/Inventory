import React, { useState } from 'react';
import './RecordSales.css';

function RecordSales() {
  const [itemId, setItemId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted:', itemId, date, time, totalAmount);
    
    setItemId('');
    setDate('');
    setTime('');
    setTotalAmount('');
  };

  return (
    <div className="record-sales">
      <h2>Record Sales</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemId">Item ID:</label>
          <input
            type="text"
            id="itemId"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Sale</button>
      </form>
    </div>
  );
}

export default RecordSales