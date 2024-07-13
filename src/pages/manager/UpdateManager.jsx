import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function UpdateManager() {
    const {id} = useParams();
    const Navigate = useNavigate();
    const [data, setData] = useState({});
    useEffect(()=>{
        const fetchById = async()=>{
            try{
                const resp = await axios.get(`http://localhost:8080/api/manager/${id}`);
                setData(resp.data);
            }catch(err){
                console.log(err);
            }
        };
        fetchById();
    }, [id]);
    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8080/api/manager/${id}`, data);
        Navigate("/allmanagers");
    }
  return (
    <div className="ManageUser">
      <h1>User Management</h1>
      <div className="form-section">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ID"
            value={data.manager_id}
            onChange={event => setData({...data,manager_id:event.target.value})}
          />
          <input
            type="text"
            placeholder="Name"
            value={data.manager_name}
            onChange={event => setData({...data,manager_name:event.target.value})}
          />
          <input
            type="text"
            placeholder="Address"
            value={data.manager_address}
            onChange={event => setData({...data,manager_address:event.target.value})}
          />
          <input
            type="text"
            placeholder="Phone No"
            value={data.manager_phone}
            onChange={event => setData({...data,manager_phone:event.target.value})}
       
          />
            <button type="submit">
                Add
            </button>
       
        </form>
      </div>
    </div>
  )
}

export default UpdateManager