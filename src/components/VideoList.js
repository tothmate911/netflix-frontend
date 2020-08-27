import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VideoCard from './VideoCard';
import { baseUrl } from '../services/Globals';

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  const url = `${baseUrl}/videos`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setVideos(response.data);
    });
  }, [url]);

  return (
    <div>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
