import React, { useEffect, useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './Reports.css'; // Import your CSS file for custom styling
import { BASE_URL } from './apis';
// import '~primeicons/primeicons.css';
const Reports = () => {
    const dt = useRef(null);
    const [users, setUsers] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [globalFilter, setGlobalFilter] = useState('');

    useEffect(() => {
        const getAllUsersData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/show-all-leads`);

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

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const imageBodyTemplate = (rowData) => {
        return (
            <img src={rowData.device_images} alt="Device" className="device-image" onClick={() => setSelectedImage(rowData.device_images)} />
        );
    };

    const onHide = () => {
        setSelectedImage(null);
    };

    return (
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
                <Column field="email" header="Email" sortable={true} />
                <Column field="phone_number" header="Phone" sortable={true} />
                <Column field="contact_name" header="Name" sortable={true} />
                <Column field="warranty_status" header="Warranty Status" sortable={true} />
                <Column field="device_brand" header="Device Brand" sortable={true} />
                <Column field="device_emi_number" header="Device EMI Number" sortable={true} />
                <Column field="product_value" header="Device Price" sortable={true} />
                <Column field="price" header="Price" sortable={true} />
                <Column body={imageBodyTemplate} header="Device Images" />
            </DataTable>
            <Dialog header="Device Image" visible={!!selectedImage} onHide={onHide} modal className="device-image-dialog">
                {selectedImage && <img src={selectedImage} alt="Selected Device" className="device-image-full" />}
            </Dialog>
        </div>
    );
};

export default Reports;
