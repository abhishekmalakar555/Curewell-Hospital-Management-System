import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                CureWell
            </div>

            <div className="nav-right">
                <Link to="/doctors" className="nav-link">View Doctor</Link>
                <Link to="/specialization" className="nav-link">View Specialization</Link>
                <Link to="/surgeries" className="nav-link">View Today's Surgery</Link>
                <Link to="/add-doctor" className="nav-link">Add Doctor</Link>
            </div>
        </div>
    );
}

export default Navbar;