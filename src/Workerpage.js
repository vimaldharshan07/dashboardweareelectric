import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import './Workerpage.css';

const WorkerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [employees] = useState([
    { id: 1, name: 'vimal', dob: '1990-01-01', role: 'Developer' },
    { id: 2, name: 'dharshan', dob: '1985-05-15', role: 'Designer' },
    { id: 3, name: 'vinay', dob: '1923-05-15', role: 'tester' },
    { id: 4, name: 'jhonny', dob: '1923-05-15', role: 'Drawer' },
    
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="worker-page-container">
      <div className="logo-container">
        <img src="logo2.png" alt="Logo" className="main-logo" />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search with name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="employee-list">
        {filteredEmployees.map((employee, index) => (
          <div key={employee.id} className="employee-item">
            <div className="employee-details">
              <div className="employee-badge">{index + 1}</div>
              <p className="emp">Emp ID: {employee.id}</p>
              <p className="emp">Name: {employee.name}</p>
              <p className="emp">
                DOB:<span className="dob-data">{employee.dob}</span>{' '}
              </p>
          
              <p className="emp">
                Role:<span className="role-data">{employee.role}</span>{' '}
              </p>
            
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button>
          <Link to="/dashboard" className="button">
            <FontAwesomeIcon icon={faHome} className="green-icon" />
          </Link>
        </button>
      
        <button className="button" disabled>
          <FontAwesomeIcon icon={faUser} className="green-icon" />{' '}
        </button>
       
      </div>
      <img src="logo3.png" alt="Worker Logo" className="worker-logo" />
    </div>
  );
};

export default WorkerPage;








