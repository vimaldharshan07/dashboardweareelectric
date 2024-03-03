// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Loginpage';
import Dashboard from './Dashboard';
import WorkerPage from './Workerpage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/worker" element={<WorkerPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
