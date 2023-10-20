import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive w-full h-full aspect-video">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
      allowFullScreen
      title="Embedded youtube"
      loading="priority"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
