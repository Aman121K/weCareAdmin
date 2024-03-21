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
                const response = await fetch("https://api.wecare.ind.in/all-sub-admins-data");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const usersData = await response.json();
                console.log("user data", usersData);
                setUsers(usersData.data.reverse());
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
                        <th>Earnings</th>
                        <th>Added Date</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user, index) => {
                        console.log("user>>>", user); return (
                            <tr key={user._id}>
                                <td>{indexOfFirstUser + index + 1}</td>
                                <td>{user?.agent?.email}</td>
                                {/* <td>{user.password}</td> */}
                                <td>{user?.totalPrice}</td>
                                <td>{new Date(user?.agent?.added_date).toLocaleString()}</td>
                            </tr>
                        )
                    })}
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
