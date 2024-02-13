import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef",height:'1200px' }}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>We care</h5></a></li>
                <Link to="/">
                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-home font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                </Link>
                <Link to="/subadmin">
                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Sub-Admin</span></a></li>
                </Link>
                <Link to="/reports">
                    <li class="nav-item mb-2">
                        <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports</span></a>

                    </li>
                </Link>
                <Link to="/reports">
                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                </Link>
                {/* <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li> */}
                {/* <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Templates</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Themes</a></li> */}
            </ul>
        </div>
    )
}
export default Sidebar