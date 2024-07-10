import React, { useState, useEffect } from 'react';
import './ManageUser.css';
import SidebarAdmin from '../../components/admin/SidebarAdmin';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: '', name: '', address: '', phone: '', role: 'Manager' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
   
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
   
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleAddUser = async () => {
    
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    setUsers([...users, data]);
    setNewUser({ id: '', name: '', address: '', phone: '', role: 'Manager' });
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = async () => {
    
    const response = await fetch(`/api/users/${editingUser}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingUser),
    });
    const data = await response.json();
    setUsers(users.map((user) => (user.id === data.id ? data : user)));
    setEditingUser(null);
  };

  const handleDeleteUser = async (id) => {
 
    await fetch(`/api/users/{id}`, {
      method: 'DELETE',
    });
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="ManageUser">
      <h1>User Management</h1>
      <div className="form-section">
        <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
        <input
          type="text"
          placeholder="ID"
          value={editingUser ? editingUser.id : newUser.id}
          onChange={(e) => {
            const value = e.target.value;
            editingUser
              ? setEditingUser({ ...editingUser, id: value })
              : setNewUser({ ...newUser, id: value });
          }}
        />
        <input
          type="text"
          placeholder="Name"
          value={editingUser ? editingUser.name : newUser.name}
          onChange={(e) => {
            const value = e.target.value;
            editingUser
              ? setEditingUser({ ...editingUser, name: value })
              : setNewUser({ ...newUser, name: value });
          }}
        />
        <input
          type="text"
          placeholder="Address"
          value={editingUser ? editingUser.address : newUser.address}
          onChange={(e) => {
            const value = e.target.value;
            editingUser
              ? setEditingUser({ ...editingUser, address: value })
              : setNewUser({ ...newUser, address: value });
          }}
        />
        <input
          type="text"
          placeholder="Phone No"
          value={editingUser ? editingUser.phone : newUser.phone}
          onChange={(e) => {
            const value = e.target.value;
            editingUser
              ? setEditingUser({ ...editingUser, phone: value })
              : setNewUser({ ...newUser, phone: value });
          }}
        />
        <select
          value={editingUser ? editingUser.role : newUser.role}
          onChange={(e) => {
            const value = e.target.value;
            editingUser
              ? setEditingUser({ ...editingUser, role: value })
              : setNewUser({ ...newUser, role: value });
          }}
        >
          <option value="Manager">Manager</option>
          <option value="Stockkeeper">Stockkeeper</option>
        </select>
        <button onClick={editingUser ? handleUpdateUser : handleAddUser}>
          {editingUser ? 'Update User' : 'Add User'}
        </button>
      </div>
      <div className="user-list">
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <span>{user.id} - {user.name} - {user.address} - {user.phone} - {user.role}</span>
              <button onClick={() => handleEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageUser;
