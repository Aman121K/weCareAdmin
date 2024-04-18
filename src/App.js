import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import SubAdmin from './Subadmin';
import Reports from './Reports';
import AddUser from './Adduser';
import LoginPage from './login';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// import { Navbar } from 'react-bootstrap';

function App() {
  const [userIsLogging, setUserIsLogging] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const loginData = localStorage.getItem('userData');
    if (loginData) {
      setUserIsLogging(true);
    }else{
      setUserIsLogging(true)
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* {!userIsLogging && ( */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <div className="container-fluid" id="main">
                  <div className="row row-offcanvas row-offcanvas-left">
                    <Sidebar />
                    <Routes>
                      <Route path="/dash" element={<Dashboard />} />
                      <Route path="/subadmin" element={<SubAdmin />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/adduser" element={<AddUser />} />
                    </Routes>
                    {/* </Sidebar> */}
                  </div>
                </div>
              </>
            }
          />
        {/* )} */}
      </Routes>
    </div>
  );
}

export default App;
