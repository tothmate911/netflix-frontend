import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoCard(props) {
  const { id, name } = props.video;
  return (
    <div>
      <Link to={`/videos/${id}`}>
        <p>{id}</p>
        <p>{name}</p>
      </Link>
    </div>
  );
}
