import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';

export default function DetailedVideoPage(props) {
  const [videoWithRecommendation, setVideoWithRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const url = `http://localhost:8762/video-service/videos/${id}`;

  useEffect(() => {
    console.log('sending request to ' + url);
    setIsLoading(true);

    axios.get(url).then((response) => {
      console.log(response.data);
      setVideoWithRecommendation(response.data);
      setIsLoading(false);
    });
  }, [url]);

  const addRecommendation = () => {
    console.log('add recommendation');
  };

  let content = <h3>Loading video...</h3>;

  if (!isLoading && videoWithRecommendation.video !== undefined) {
    console.log(videoWithRecommendation);
    content = (
      <div>
        <p>{videoWithRecommendation.video.id}</p>
        <p>{videoWithRecommendation.video.name}</p>

        <iframe
          title="title"
          src={videoWithRecommendation.video.url.replace('watch?v=', 'embed/')}
          scrolling="no"
          frameBorder="0"
        ></iframe>

        {/* <ReactPlayer url={videoWithRecommendation.video.url} /> */}

        <p>{videoWithRecommendation.recommendations}</p>
        <button onClick={addRecommendation}>Add recommendation</button>
      </div>
    );
  }

  return content;
}
