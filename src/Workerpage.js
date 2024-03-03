import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import './Workerpage.css';

const WorkerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [employees,] = useState([
    { id: 1, name: 'vimal', dob: '1990-01-01', role: 'Developer' },
    { id: 2, name: 'dharshan', dob: '1985-05-15', role: 'Designer' },
    { id: 3, name: 'vinay', dob: '1923-05-15', role: 'tester' },
    { id: 4, name: 'jhonny', dob: '1923-05-15', role: 'Drawer' },
    // Add more employee data as needed
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="worker-page-container">
      <img src="logo2.png" alt="Logo" className="logo" />
      <span className="search">
      <input 
        type="text" 
        placeholder="Search with name" 
        value={searchQuery} 
        onChange={handleSearchChange} 
      /></span>
      <div className="employee-list">
        {filteredEmployees.map((employee, index) => (
          <div key={employee.id} className="employee-item">
            <div className="employee-details">
              <div className="employee-badge">{index + 1}</div>
              <p className="emp">Emp ID: {employee.id}</p>
              <p className="emp">Name: {employee.name}</p>
              <p className="emp">DOB:<span className="dob-data">{employee.dob}</span> </p> {/* Add class for DOB data */}
              <p className="emp">Role:<span className="role-data">{employee.role}</span> </p> {/* Add class for Role data */}
            </div>
          </div>
        ))}
      </div>
      <img src="logo3.png" alt="Worker Logo" className="worker-logo" />
      <div className="button-container">
        <button><Link to="/dashboard" className="button"><FontAwesomeIcon icon={faHome} className="green-icon" /></Link></button> {/* Link to Dashboard with Home icon */}
        <button className="button" disabled><FontAwesomeIcon icon={faUser} className="green-icon" /> </button> {/* Disabled button with Worker icon */}
      </div>
    </div>
  );
}

export default WorkerPage;






