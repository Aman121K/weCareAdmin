import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Routes, Route } from "react-router-dom"
import SubAdmin from './Subadmin';
import Reports from './Reports';
function App() {
  return (
    <div>
      <Navbar />
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          {/* <Dashboard/>
                   */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/subadmin" element={<SubAdmin />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App