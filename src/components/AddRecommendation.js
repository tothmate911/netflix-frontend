import React, { useState } from 'react';
import axios from 'axios';

import { baseUrl } from '../services/Globals';

export default function AddRecommendation(props) {
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(1);

  const addRecommendation = () => {
    const url = `${baseUrl}/videos/${props.videoId}/recommendations`;

    console.log('sending post request to: ' + url);
    axios
      .post(url, {
        comment: newComment,
        rating: newRating,
      })
      .then((response) => {
        console.log(response.data);
        props.setRecommendations([...props.recommendations, response.data]);
        document.getElementById('input-comment').value = '';
      });
  };

  return (
    <div>
      <input
        id="input-comment"
        type="text"
        placeholder="Write here your recommendation!"
        size="40"
        onChange={(event) => setNewComment(event.target.value)}
      />
      <select onChange={(event) => setNewRating(event.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <button onClick={addRecommendation}>Add</button>
    </div>
  );
}
