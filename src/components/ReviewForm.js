import React, { useState } from 'react';
import '../styles/ReviewForm.css';

const ReviewForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    rating: initialData.rating || 1,
    review_text: initialData.review_text || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label>Book Title
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>Author
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </label>
      <label>Rating
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" required />
      </label>
      <label>Review Text
        <textarea name="review_text" value={formData.review_text} onChange={handleChange} required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
