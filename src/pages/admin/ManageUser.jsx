import React, { useState } from 'react';
import './ManageUser.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {
  const [managerid, setManagerId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleAddUser = (event) => {
    event.preventDefault();
    const req = {
      manager_id: managerid,
      manager_name: name,
      manager_address: address,
      manager_phone: phone,
    };
    axios.post("http://localhost:8080/api/manager/add", req).then(response => {
      console.log('hapa wapi');
      navigate("/welcome");
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <div className="ManageUser">
      <h1>User Management</h1>
      <div className="form-section">
        <h2>Add User</h2>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="ID"
            value={managerid}
            onChange={event => setManagerId(event.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={event => setAddress(event.target.value)}
          />
          <input
            type="text"
            placeholder="Phone No"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageUser;
