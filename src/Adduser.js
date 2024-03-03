import React, { useState, useEffect } from "react";
import "./AddUser.css";

const AddUser = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        type: "",
      });
    
      const [showPopup, setShowPopup] = useState(false);
      const [apiData, setApiData] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:6002');
            if (response.ok) {
              const data = await response.json();
              setApiData(data);
            } else {
              console.error('API request failed');
            }
          } catch (error) {
            console.error('Error making API request:', error);
          }
        };
    
        fetchData();
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:6002', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            setApiData(data);
    
            setShowPopup(true);
          } else {
            console.error('API request failed');
          }
        } catch (error) {
          console.error('Error making API request:', error);
        }
      };
    
      const closePopup = () => {
        setShowPopup(false);
        setApiData(null);
      };
    
      return (
        <div className="add-user-container">
          <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
       </form>
    
          {showPopup && (
            <div className="popup">
              <p>{`User Added - Type: ${apiData?.type}, Email: ${apiData?.email}, Password: ${apiData?.password}`}</p>
              <button onClick={closePopup}>Close</button>
            </div>
          )}
        </div>
      );
    };

export default AddUser;
