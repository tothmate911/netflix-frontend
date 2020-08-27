import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
// import ReactPlayer from 'react-player';

import RecommendationList from '../components/RecommendationList';
import AddRecommendation from '../components/AddRecommendation';
import { baseUrl } from '../services/Globals';

export default function DetailedVideoPage(props) {
  const [video, setVideo] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const url = `${baseUrl}/videos/${id}`;

  useEffect(() => {
    console.log('sending get request to ' + url);
    setIsLoading(true);

    axios.get(url).then((response) => {
      console.log(response.data);
      setVideo(response.data.video);
      setRecommendations(response.data.recommendations);
      setIsLoading(false);
    });
  }, [url]);

  let content = <h3>Loading video...</h3>;

  if (!isLoading && video.url !== undefined) {
    console.log(video);
    console.log(recommendations);

    content = (
      <div>
        <p>{id}</p>
        <p>{video.name}</p>

        <iframe
          title="title"
          src={video.url.replace('watch?v=', 'embed/')}
          scrolling="no"
          frameBorder="0"
        ></iframe>

        {/* <ReactPlayer url={videoWithRecommendation.video.url} /> */}

        <RecommendationList recommendations={recommendations} />
        <AddRecommendation
          videoId={id}
          setRecommendations={setRecommendations}
          recommendations={recommendations}
        />
      </div>
    );
  }

  return content;
}
