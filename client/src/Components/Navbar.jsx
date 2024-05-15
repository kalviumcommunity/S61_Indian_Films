import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-item">
                <Link to="/" className="nav-link"><strong>Home</strong></Link></div>
            <div className="nav-item">
                <Link to="/entities" className="nav-link"><strong>Entities</strong></Link>
            </div>
            <div className="nav-item">
                <Link to="/movies" className="nav-link"><strong>MovieDB</strong></Link>
            </div>
            <div className="nav-item">
                <Link to="/add-entity" className="nav-link"><strong>Add Entity</strong></Link>
            </div>
            <div className="nav-item">
                <Link to="/update/:id" className="nav-link"><strong>Update Entity</strong></Link>
            </div>
            <div className='nav-item'>
                <Link  to='/register' className='nav-link'><strong>Register</strong></Link>
            </div>
            <div className='nav-item'>
                <Link  to="/login" className='nav-link'><strong>LogIn</strong></Link>
            </div>
            <div className='nav-item'>
                <Link to='/logout' className='nav-link'><strong>LogOut</strong></Link>
            </div>
        </nav>
    );
}

export default Navbar;
