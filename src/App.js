import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddReviewPage from './pages/AddReviewPage';
import ReviewDetailsPage from './pages/ReviewDetailsPage';
import EditReviewPage from './pages/EditReviewPage';
import { fetchAllReviews, searchReviews } from './api/reviewApi';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      const searchResults = await searchReviews(query);
      setReviews(searchResults);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage searchQuery={searchQuery} onReviewSelect={(id) => console.log(id)} />} />
        <Route path="/add-review" element={<AddReviewPage />} />
        <Route path="/reviews/:id" element={<ReviewDetailsPage />} />
        <Route path="/edit-review/:id" element={<EditReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
