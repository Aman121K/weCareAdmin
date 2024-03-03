import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Sidebar = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" >
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>We care</h5></a></li>
                <Link to="/">
                    <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><i className="fas fa-home font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                </Link>
                <Link to="/subadmin">
                    <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Sub-Admin</span></a></li>
                </Link>
                <Link to="/reports">
                    <li className="nav-item mb-2">
                        <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports</span></a>

                    </li>
                </Link>
                <Link to="/reports">
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                </Link>
                {/* <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li> */}
                {/* <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#">Templates</a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#">Themes</a></li> */}
            </ul>
        </div>
    )
}
export default Sidebar