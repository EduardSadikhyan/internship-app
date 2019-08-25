import React from 'react';

import CrudApp from '../CrudApp';

const SuperAdminDashboard = () => (
    <div className='admin-dashboard-container'>
      <CrudApp roles={"SuperAdmin"}/>
    </div>
  );
  
  export default SuperAdminDashboard;


