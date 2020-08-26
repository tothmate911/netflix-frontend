import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VideoCard from './VideoCard';

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  const url = 'http://localhost:8762/video-service/videos';

  useEffect(() => {
    axios.get(url).then((response) => {
      setVideos(response.data);
    });
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
