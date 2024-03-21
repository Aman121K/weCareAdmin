import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Table, Pagination } from 'react-bootstrap';
import './style.css';

const Subadmin = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:6002/users");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const usersData = await response.json();
                setUsers(usersData.reverse());
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Container className="contain">
            <div className="content">
                <h4>Agents Orders Records List</h4>
                <NavLink to='/adduser' className='user'>
                    Add User
                </NavLink>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Email</th>
                        {/* <th>Password</th> */}
                        <th>Type</th>
                        <th>Added Date</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user, index) => (
                        <tr key={user._id}>
                            <td>{indexOfFirstUser + index + 1}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.password}</td> */}
                            <td>{user.type}</td>
                            <td>{new Date(user.added_date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                <Pagination.Prev onClick={() => setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)} />
                {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
                    <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(currentPage === Math.ceil(users.length / usersPerPage) ? currentPage : currentPage + 1)} />
            </Pagination>
        </Container>
    );
};

export default Subadmin;
