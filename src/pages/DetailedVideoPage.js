import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
// import ReactPlayer from 'react-player';

import RecommendationList from '../components/RecommendationList';
import AddRecommendation from '../components/AddRecommendation';
import { baseUrl } from '../services/Globals';

export default function DetailedVideoPage(props) {
  const [videoWithRecommendation, setVideoWithRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const url = `${baseUrl}/videos/${id}`;

  useEffect(() => {
    console.log('sending request to ' + url);
    setIsLoading(true);

    axios.get(url).then((response) => {
      console.log(response.data);
      setVideoWithRecommendation(response.data);
      setIsLoading(false);
    });
  }, [url]);

  let content = <h3>Loading video...</h3>;

  if (!isLoading && videoWithRecommendation.video !== undefined) {
    console.log(videoWithRecommendation);

    const { name } = videoWithRecommendation.video;

    content = (
      <div>
        <p>{id}</p>
        <p>{name}</p>

        <iframe
          title="title"
          src={videoWithRecommendation.video.url.replace('watch?v=', 'embed/')}
          scrolling="no"
          frameBorder="0"
        ></iframe>

        {/* <ReactPlayer url={videoWithRecommendation.video.url} /> */}

        <RecommendationList
          recommendations={videoWithRecommendation.recommendations}
        />
        <AddRecommendation videoId={id} />
      </div>
    );
  }

  return content;
}
