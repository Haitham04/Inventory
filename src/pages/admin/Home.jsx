import React from 'react';
import './AdminDashboard.css';
import SidebarAdmin from '../../components/admin/SidebarAdmin';

const Home = () => {
  return (
    <React.Fragment>
        <div className="dashboard">
         <SidebarAdmin/>
            <div className="content">
                <h2>Welcome to the Admin Dashboard</h2>
                <p>Select an option from the menu to get started.</p>
                <img src='Login-image.jpg' alt="Login image" class="Login-image" height="380px" width="350px" />    
            </div>
    </div>
    </React.Fragment>

    
  );
};

export default Home;

