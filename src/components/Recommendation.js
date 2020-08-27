import React from 'react';

export default function Recommendation(props) {
  const { comment, rating } = props.recommendation;
  return (
    <div>
      <p>{comment}</p>
      <p>{rating}</p>
    </div>
  );
}
