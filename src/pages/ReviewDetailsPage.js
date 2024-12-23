import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReviewById, deleteReview } from '../api/reviewApi';
import '../styles/ReviewDetails.css';

const ReviewDetailsPage = () => {
  const { id } = useParams(); // Get the review ID from the URL
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null); // For error handling
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const loadReview = async () => {
      try {
        setLoading(true); // Set loading before the fetch call
        const fetchedReview = await fetchReviewById(id);
        setReview(fetchedReview);
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching review:', error);
        setError('Failed to load review');
        setLoading(false);
      }
    };

    loadReview();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-review/${id}`); // Redirect to the edit page
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await deleteReview(id); // Delete the review from the API
        alert('Review deleted successfully!');
        navigate('/'); // Redirect to the home page after deletion
      } catch (error) {
        console.error('Error deleting review:', error);
        alert('Failed to delete the review.');
      }
    }
  };

  if (loading) return <div>Loading review...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error handling if something goes wrong

  return (
    <div className="review-details-page">
      <h1>{review.title}</h1>
      <h3>by {review.author}</h3>
      <p>{review.review_text}</p>
      <p><strong>Rating:</strong> {review.rating}/5</p>
      <div className="actions">
        <button onClick={handleEdit}>Edit Review</button>
        <button onClick={handleDelete} className="delete-button">
          Delete Review
        </button>
      </div>
    </div>
  );
};

export default ReviewDetailsPage;
