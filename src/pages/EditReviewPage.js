import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReviewById, updateReview } from '../api/reviewApi';
import '../styles/EditReviewPage.css';

const EditReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({ title: '', author: '', review_text: '' });

  useEffect(() => {
    const loadReview = async () => {
      try {
        const fetchedReview = await fetchReviewById(id);
        setReview(fetchedReview);
      } catch (error) {
        console.error('Error fetching review:', error);
      }
    };
    loadReview();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateReview(id, review);
      alert('Review updated successfully!');
      navigate(`/reviews/${id}`); // Redirect back to details page
    } catch (error) {
      console.error('Error updating review:', error);
      alert('Failed to update the review.');
    }
  };

  return (
    <div className="edit-review-page">
      <h1>Edit Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={review.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={review.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Review:
          <textarea
            name="review_text"
            value={review.review_text}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditReviewPage;
