
// Fetch all reviews
export const fetchAllReviews = async () => {
    const response = await fetch('http://localhost:5000/api/reviews');
    if (!response.ok) throw new Error('Failed to fetch reviews');
    return response.json();
  };
  
  // Fetch review by ID
  export const fetchReviewById = async (id) => {
    const response = await fetch(`http://localhost:5000/api/reviews/${id}`);
    if (!response.ok) throw new Error('Failed to fetch review');
    return response.json();
  };
  
  // Create a new review
  export const createReview = async (review) => {
    const response = await fetch('http://localhost:5000/api/reviews', {
      method: 'POST',
      body: JSON.stringify(review),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to create review');
    return response.json();
  };
  
  // Delete a review by ID
  export const deleteReview = async (id) => {
    const response = await fetch(`http://localhost:5000/api/reviews/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete review');
    return response.json();
  };
  
  // Update an existing review by ID
  export const updateReview = async (id, review) => {
    const response = await fetch(`http://localhost:5000/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify(review),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to update review');
    return response.json();
  };
  
  // Search reviews
  export const searchReviews = async (query) => {
    try {
      const response = await fetch(`http://localhost:5000/api/reviews/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to fetch search results');
      return response.json();
    } catch (error) {
      console.error('Error fetching search results:', error);
      return []; // Return an empty array in case of an error
    }
  };
  