import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
    onSearch(query.trim());
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Book Review App</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-review">Add Review</Link></li>
      </ul>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search reviews..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
