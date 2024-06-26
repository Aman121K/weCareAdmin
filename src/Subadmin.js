import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import './style.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { BASE_URL } from './apis';
const Subadmin = () => {
    const dt = useRef(null);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [globalFilter, setGlobalFilter] = useState('');
    const exportCSV = () => {
        dt.current.exportCSV();
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${BASE_URL}/all-sub-admins-data`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const usersData = await response.json();
                console.log("user data", usersData.data);
                setUsers(usersData.data.reverse());
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);


    return (
        <Container className="contain">
            <div className="content">
                <h4>Agents Orders Records List</h4>
                <NavLink to='/adduser' className='user'>
                    Add User
                </NavLink>
            </div>
            <div style={{ marginTop: '50px' }} className="datatable-container">
                <div className="toolbar">
                    <InputText
                        type="search"
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder="Search"
                        className="search-input"
                    />
                    <Button onClick={exportCSV} icon="pi pi-download" className="download-button" />
                </div>
                <DataTable ref={dt} value={users} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    globalFilter={globalFilter} className="data-table">
                    <Column field="agent.Owner_name" header="Name" sortable={true} />
                    <Column field="agent.email" header="email" sortable={true} />
                    <Column field="totalPrice" header="Total Earning" sortable={true} />
                    <Column field="agent.Pan" header="Created date" sortable={true} />
                    <Column field="agent.mobile_no" header="Mobile No." sortable={true} />
                    <Column field="agent.Aadhar" header="Adhar Card" sortable={true} />
                    <Column field="agent.Account_no" header="Account Number" sortable={true} />
                </DataTable>
              
            </div>
        </Container>
    );
};

export default Subadmin;
