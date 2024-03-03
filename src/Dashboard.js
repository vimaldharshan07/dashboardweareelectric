import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  const [showProductivity, setShowProductivity] = useState(false);
  const navigate = useNavigate();

  const toggleProductivity = () => {
    setShowProductivity(!showProductivity);
  };

  const handleDashboardClick = () => {
    toggleProductivity();
  };

  const goToWorkerPage = () => {
    navigate('/worker');
  };

  return (
    <div className="dashboard-container">
      <div className="background" />
      <img src="/logo2.png" alt="Logo" className="main-logo" />
      <h2 onClick={handleDashboardClick} className="dashboard-heading">Employee Productivity Dashboard</h2>
      <div className="productivity-container"> 
        {showProductivity && (
          <div className="productivity-data">
            <p>Productivity on Monday: 80%</p>
            <p>Productivity on Tuesday: 75%</p>
            <p>Productivity on Wednesday: 85%</p>
            <p>Productivity on Thursday: 90%</p>
            <p>Productivity on Friday: 85%</p>
            <p>Productivity on Saturday: 70%</p>
          </div>
        )}
      </div>
      <div className="bottom-container">
        <button className="button" onClick={goToWorkerPage}>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </button>
        <button className="button">
          <FontAwesomeIcon icon={faHome} className="icon" />  
        </button>
      </div>
      <img src="/logo3.png" alt="Secondary Logo" className="secondary-logo" />
    </div>
  );
}

export default Dashboard;










