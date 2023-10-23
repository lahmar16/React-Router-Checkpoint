
import React from 'react';
import YouTube from 'react-youtube';


const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: '360',
    width: '640',
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
