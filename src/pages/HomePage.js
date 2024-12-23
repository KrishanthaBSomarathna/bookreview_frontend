import React, { useEffect, useState } from 'react';
import ReviewCard from '../components/ReviewCard';
import '../styles/HomePage.css';
import { fetchAllReviews } from '../api/reviewApi';

const HomePage = ({ searchQuery, onReviewSelect }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchAllReviews();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    loadReviews();
  }, []);

  const filteredReviews = searchQuery
    ? reviews.filter(
        (review) =>
          review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.review_text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : reviews;

  return (
    <div className="home-page">
      {filteredReviews.length > 0 ? (
        filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} onClick={onReviewSelect} />
        ))
      ) : (
        <div>No reviews match your search.</div>
      )}
    </div>
  );
};

export default HomePage;
