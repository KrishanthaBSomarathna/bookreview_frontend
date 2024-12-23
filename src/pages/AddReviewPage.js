import React from 'react';
import ReviewForm from '../components/ReviewForm';
import { createReview } from '../api/reviewApi';
import '../styles/AddReview.css'

const AddReviewPage = () => {
  const handleAddReview = (data) => {
    createReview(data).then(() => alert('Review added successfully'));
  };

  return (
    <div className="add-review-page">
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default AddReviewPage;
