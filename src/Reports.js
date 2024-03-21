// const [data, setData] = useState([]);

//     useEffect(() => {
//         const getAllUsersData = async () => {
//             try {
//                 const response = await fetch("http://107.22.72.28:6002/user");

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const jsonResponse = await response.json();
//                 if (jsonResponse.success && Array.isArray(jsonResponse.data)) {
//                     setData(jsonResponse.data);
//                     console.log(jsonResponse.data)
//                 } else {
//                     console.error("Unexpected JSON structure: ", jsonResponse);
//                 }
//             } catch (error) {
//                 console.error("Error fetching user data:", error);
//             }
//         };

//         getAllUsersData();
//     }, []);




import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Container, Table, Pagination, Modal, Button } from 'react-bootstrap';
import './style.css';



const Reports = () => {
    const [users, setUsers] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const itemsPerPage = 10;

    useEffect(() => {
        const getAllUsersData = async () => {
            try {
                const response = await fetch("http://107.22.72.28:6002/show-all-leads");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonResponse = await response.json();
                if (jsonResponse.success && Array.isArray(jsonResponse.data)) {
                    setUsers(jsonResponse.data);
                } else {
                    console.error("Unexpected JSON structure: ", jsonResponse);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getAllUsersData();
    }, []);

    const totalPages = Math.ceil(users.length / itemsPerPage);
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = activePage * itemsPerPage;
    const currentRecords = users.slice(startIndex, endIndex);

    const handleClick = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const renderImages = (images) => {
        if (Array.isArray(images)) {
            return images.map((image, index) => (
                <img key={index} src={image} alt="Device" style={{ width: '50px', height: '50px', cursor: 'pointer' }} onClick={() => handleImageClick(image)} />
            ));
        } else {
            return null;
        }
    };
    

    return (
        <>
            <Container className="contain">
                <div className="content">
                    <h4>Agents Orders Records List</h4>
                   
                </div>
                <div className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Name</th>
                                <th>Warranty Status</th>
                                <th>Device Brand</th>
                                <th>Device Emi Number</th>
                                <th>Device Images</th>
                                <th>Product Value</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {Array.isArray(users) && users.length > 0 ? (
                            <tbody>
                                {currentRecords.map((record, index) => (
                                    <tr key={record._id}>
                                        <td>{startIndex + index + 1}</td>
                                        <td>{record.email}</td>
                                        <td>{record.phone_number}</td>
                                        <td>{record.contact_name}</td>
                                        <td>{record.warranty_status}</td>
                                        <td>{record.device_brand}</td>
                                        <td>{record.device_emi_number}</td>
                                        <td className='image'>{renderImages(record.device_images)}</td>
                                        <td>{record.product_value}</td>
                                        <td>{record.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan="9">Loading...</td>
                                </tr>
                            </tbody>
                        )}
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
            <Modal show={!!selectedImage} onHide={handleCloseModal}>
            <Modal.Header >
    <Modal.Title>Device Image</Modal.Title>
    
</Modal.Header>
                <Modal.Body>
                    {selectedImage && <img src={selectedImage} alt="Selected Device" style={{ width: '100%', height: 'auto' }} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Reports;
