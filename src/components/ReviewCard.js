import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';

const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  const { id, title, author, rating, review_text } = review;

  const handleCardClick = () => {
    navigate(`/reviews/${id}`); // Navigate to the review details page
  };

  return (
    <div className="review-card" onClick={handleCardClick}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{review_text.slice(0, 100)}...</p>
      <div className="rating">{Array.from({ length: rating }, (_, i) => '⭐')}</div>
    </div>
  );
};

export default ReviewCard;
