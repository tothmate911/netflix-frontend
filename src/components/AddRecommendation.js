import React, { useState } from 'react';
import axios from 'axios';

import { baseUrl } from '../services/Globals';

export default function AddRecommendation(props) {
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(1);

  const addRecommendation = () => {
    console.log(`add new recommendation: ${newComment} (rating: ${rating})`);
    const url = `${baseUrl}/videos/${props.videoId}/recommendations`;

    console.log('sending post request to: ' + url);
    axios.post(url, {
      comment: newComment,
      rating: rating,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write here your recommendation!"
        size="40"
        onChange={(event) => setNewComment(event.target.value)}
      />
      <select onChange={(event) => setRating(event.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <button onClick={addRecommendation}>Add</button>
    </div>
  );
}
