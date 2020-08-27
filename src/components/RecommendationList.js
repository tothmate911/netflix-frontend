import React from 'react';

import Recommendation from './Recommendation';

export default function RecommendationList(props) {
  return (
    <div>
      <h3>Recommendations:</h3>

      {props.recommendations.map((recommendation) => (
        <Recommendation
          key={recommendation.id}
          recommendation={recommendation}
        />
      ))}
    </div>
  );
}
