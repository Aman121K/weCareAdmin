import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Table, Pagination } from 'react-bootstrap';
import './style.css'

const Subadmin = () => {
    const [activePage, setActivePage] = useState(1);
    const [records, setRecords] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"abcd15646" ,totalEarning:'1200'},
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe" ,totalEarning:'1200'},
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200'  },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200' },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",device:"realMe" ,totalEarning:'1200'},
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe",totalEarning:'1200'  },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe",totalEarning:'1200'  },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200'},
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe",totalEarning:'1200' },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",device:"realMe",totalEarning:'1200' },
        { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com',mobile:"7973070600",device:"realMe" ,totalEarning:'1200' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com',mobile:"7973070600",device:"realMe" ,totalEarning:'1200' },

    ]);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(records.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = activePage * itemsPerPage;
    const currentRecords = records.slice(startIndex, endIndex);

    return (
        <>
            <Container className="contain">
                <div className="content">
                    <h4>Agents Orders Records List</h4>
                    <NavLink to='/adduser' className='user'>
                        Add User
                    </NavLink>
                </div>

                <div className="table-responsive">
                    <Table >
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>GST</th>
                                <th>Total Earning</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRecords.map((record, index) => (
                                <tr key={record.id}>
                                    <td>{startIndex + index + 1}</td>
                                    <td>{record.name}</td>
                                    <td>{record.email}</td>
                                    <td>{record.mobile}</td>
                                    <td>{record.gst}</td>
                                    <td>Rs.{record.totalEarning}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <Pagination className="page">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Pagination.Item key={i + 1} active={i + 1 === activePage} onClick={() => handleClick(i + 1)}>
                            {i + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Container>
        </>
    );
};

export default Subadmin;