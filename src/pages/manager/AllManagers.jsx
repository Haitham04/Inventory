import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AllManagers() {
    const [managers, setManagers] = useState([]);

    useEffect(()=>{
        loadManagers();
    },[]);

    const loadManagers = async ()=>{
        try{
            const resp = await axios.get("http://localhost:8080/api/manager");
            setManagers(resp.data);
        }catch(err){
            console.log(err);
        }
    }

        const handleDelete =  (id) => {
            const popMessage = window.confirm("you usre to delete" + id)
           if (popMessage){
            axios.delete(`http://localhost:8080/api/manager/${id}`)
            .then((res)=>{
                setManagers(managers.filter(manager => manager.id !== id));
            })
           }
        }
  
  return (
    <div>
          <h1>User Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {managers.map((manager, index) => (
            <tr key={index}>
              <td>{manager.manager_id}</td>
              <td>{manager.manager_name}</td>
              <td>{manager.manager_address}</td>
              <td>{manager.manager_phone}</td>
              <td>
                 <Link to={`/updateManager/${manager.id}`}><button><FontAwesomeIcon icon={faPencil}/></button></Link>
                 <button onClick={() => handleDelete(manager.id)}><FontAwesomeIcon icon={faTrash}/></button>
             </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllManagers