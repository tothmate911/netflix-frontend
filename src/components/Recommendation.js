import React, { useState } from 'react';
import axios from 'axios';

import { baseUrl } from '../services/Globals';

export default function Recommendation(props) {
  const { comment, rating, id, videoId } = props.recommendation;

  const [editMode, setEditMode] = useState(false);
  const [editComment, setEditComment] = useState(comment);
  const [editRating, setEditRating] = useState(rating);

  const updateRecommendation = () => {
    const url = `${baseUrl}/videos/${videoId}/recommendations/${id}`;
    console.log('sendin put request to' + url);
    axios
      .put(url, {
        comment: editComment,
        rating: editRating,
      })
      .then(() => {
        setEditMode(false);
      });
  };

  let recommendation = (
    <div className="card">
      <p>{comment}</p>
      <p>{`rating: ${rating}`}</p>
      <button onClick={() => setEditMode(true)}>Edit</button>
    </div>
  );

  if (editMode) {
    recommendation = (
      <div className="card">
        <input
          type="text"
          defaultValue={comment}
          autoFocus={true}
          onChange={(event) => setEditComment(event.target.value)}
        />
        <select
          defaultValue={rating}
          onChange={(event) => setEditRating(event.target.value)}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <button onClick={updateRecommendation}>Save</button>
      </div>
    );
  }

  return <div>{recommendation}</div>;
}
