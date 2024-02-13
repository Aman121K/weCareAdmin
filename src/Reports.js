// import React from 'react';
// const Reports=()=>{
//     return(
//         <div>
//             this is Reports Page
//         </div>
//     )
// }
// export default Reports;

import React, { useState } from 'react';
import { Container, Table, Pagination } from 'react-bootstrap';
const Reports = () => {
    const [activePage, setActivePage] = useState(1);
    const [records, setRecords] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 1, name: 'John Doe', email: 'john@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: "7973070600", device: "realMe" },

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
            <Container className="container mt-6 mt-10">
                <h4 style={{ marginTop: '50px' }}> All Users Records List</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Device Name</th>
                            <th>Device Price</th>
                            <th>Created Dated</th>
                            {/* Add more table headings as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((record, index) => (
                            <tr key={record.id}>
                                <td>{startIndex + index + 1}</td>
                                <td>{record.name}</td>
                                <td>{record.email}</td>
                                <td>{record.mobile}</td>
                                <td>{record.device}</td>
                                <td>{record.mobile}</td>
                                <td>{record.device}</td>
                                {/* Add more table cells for additional record properties */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination>
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

export default Reports;