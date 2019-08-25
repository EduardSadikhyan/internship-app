import React from 'react';
import CrudApp from '../CrudApp';

const AdminDashboard = () => (
  <div className='admin-dashboard-container'>
          <CrudApp roles={"Admin"}/>
  </div>
);

export default AdminDashboard;