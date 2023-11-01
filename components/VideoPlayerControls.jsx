import React from 'react';
import PropTypes from 'prop-types';

VideoPlayerControlsProps.propTypes = {
  progress: PropTypes.number,
  isPaused: PropTypes.bool,
  onPlayPause: PropTypes.func.isRequired,
  size: PropTypes.number | undefined,
  width: PropTypes.number | undefined,
};

export const VideoPlayerControls = ({
  progress,
  isPaused,
  onPlayPause,
  size = 48,
  width = 3,
}) => {
  return <div>VideoPlayerControls</div>;
};
