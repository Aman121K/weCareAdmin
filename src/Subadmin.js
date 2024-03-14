// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Container, Table, Pagination } from 'react-bootstrap';
// import './style.css'

// const Subadmin = () => {
//     const [users, setUsers] = useState([]);
//     const [activePage, setActivePage] = useState(1);
//     // const [records, setRecords] = useState([
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"abcd15646" ,totalEarning:'1200'},
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200' },
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe" ,totalEarning:'1200'},
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200'  },
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200' },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",device:"realMe" ,totalEarning:'1200'},
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe" },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe",totalEarning:'1200'  },
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe",totalEarning:'1200'  },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200'},
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",device:"realMe",totalEarning:'1200' },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe" ,totalEarning:'1200' },
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com' ,mobile:"7973070600",device:"realMe",totalEarning:'1200' },
//     //     { id: 1, name: 'John Doe', email: 'john@example.com',mobile:"7973070600",gst:"realMe",totalEarning:'1200' },
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com',mobile:"7973070600",device:"realMe" ,totalEarning:'1200' },
//     //     { id: 2, name: 'Jane Smith', email: 'jane@example.com',mobile:"7973070600",device:"realMe" ,totalEarning:'1200' },

//     // ]);
//     const itemsPerPage = 10;

//     const totalPages = Math.ceil(users.length / itemsPerPage);

//     const handleClick = (pageNumber) => {
//         setActivePage(pageNumber);
//     };

//     const startIndex = (activePage - 1) * itemsPerPage;
//     const endIndex = activePage * itemsPerPage;
//     const currentRecords = users.slice(startIndex, endIndex);

//     const getAllUsersData = async () => {
//         try {
//           const response = await fetch("http://107.22.72.28:6002/users", {
//             method: "GET",
            
//           });
    
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
    
//           const data = await response.json();
//           console.log(`users:`, data);
//           setUsers(data);
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       };
//       useEffect(() => {
//         getAllUsersData();
//       }, );

//     return (
//         <>
//             <Container className="contain">
//                 <div className="content">
//                     <h4>Agents Orders Records List</h4>
//                     <NavLink to='/adduser' className='user'>
//                         Add User
//                     </NavLink>
//                 </div>

//                 <div className="table-responsive">
//                     <Table >
//                         <thead>
//                             <tr>
//                                 <th>Sr.No</th>
//                                 {/* <th>Name</th> */}
//                                 <th>Email</th>
//                                 <th>Password</th>
//                                 <th>Type</th>
//                                 {/* <th>Total Earning</th> */}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((record, index) => (
//                                 <tr key={record.id}>
//                                     <td>{startIndex + index + 1}</td>
//                                     {/* <td>{record.name}</td> */}
//                                     <td>{record.email}</td>
//                                     <td>{record.password}</td>
//                                     <td>{record.type}</td>
//                                     {/* <td>Rs.{record.totalEarning}</td> */}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 </div>
//                 <Pagination className="page">
//                     {Array.from({ length: totalPages }, (_, i) => (
//                         <Pagination.Item key={i + 1} active={i + 1 === activePage} onClick={() => handleClick(i + 1)}>
//                             {i + 1}
//                         </Pagination.Item>
//                     ))}
//                 </Pagination>
//             </Container>
//         </>
//     );
// };

// export default Subadmin;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Table, Pagination } from 'react-bootstrap';
import './style.css';

const Subadmin = () => {
    const [users, setUsers] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const getAllUsersData = async () => {
            try {
                const response = await fetch("http://107.22.72.28:6002/users", {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log(`users:`, data);
                setUsers(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getAllUsersData();
    }, []);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = activePage * itemsPerPage;
    const currentRecords = users.slice(startIndex, endIndex);

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
                        <Table>
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords.map((record, index) => (
                                    <tr key={record.id}>
                                        <td>{startIndex + index + 1}</td>
                                        <td>{record.email}</td>
                                        <td>{record.password}</td>
                                        <td>{record.type}</td>
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
