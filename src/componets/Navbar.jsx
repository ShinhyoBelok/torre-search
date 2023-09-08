import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './CSS/navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSavedUsersActive, setIsSavedUsersActive] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setIsSearchActive(true);
      setIsSavedUsersActive(false);
    } else if (path === '/SavedUsers') {
      setIsSearchActive(false);
      setIsSavedUsersActive(true);
    } else {
      setIsSearchActive(false);
      setIsSavedUsersActive(false);
    }
  }, [location.pathname]);

  return (
    <nav className='d-flex'>
      <NavLink
        exact
        to="/"
        className={`link ${isSearchActive ? 'active-link' : ''}`}
      >
        Search
      </NavLink>
      <NavLink
        to="/SavedUsers"
        className={`link ${isSavedUsersActive ? 'active-link' : ''}`}
      >
        Saved users
      </NavLink>
    </nav>
  );
}
