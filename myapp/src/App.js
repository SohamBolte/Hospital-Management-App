import React from 'react';
import {
    BrowserRouter as Router,
    Routes, Route,
    Link, useLocation
} from 'react-router-dom';
import Appointments from './components/appointments';
import Doctors from './components/doctors';
import Patients from './components/patients';
import './App.css';

const App = () => {
    const location = useLocation();
    
    const isLinkActive = (path) => location.pathname === path;

    return (
        <div className="container">
            <h1 style={{ color: "green" }}>Hospital Management App</h1>
            <nav>
                <ul>
                    <li className={isLinkActive('/appointments') ? 'active' : ''}>
                        <Link to="/appointments">Appointments</Link>
                    </li>
                    <li className={isLinkActive('/doctors') ? 'active' : ''}>
                        <Link to="/doctors">Doctors</Link>
                    </li>
                    <li className={isLinkActive('/patients') ? 'active' : ''}>
                        <Link to="/patients">Patients</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Appointments />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/patients" element={<Patients />} />
            </Routes>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
