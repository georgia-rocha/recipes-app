import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/YoutubeEmbed.module.scss';

export default function YouTubeEmbed({ embedId }) {
  return (
    <div className={ styles.video_responsive }>
      <iframe
        width="853"
        height="480"
        src={ `https://www.youtube.com/embed/${embedId}` }
        allowFullScreen
        title="Embedded YouTube"
        data-testid="video"
      />
    </div>
  );
}

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string,
}.isRequired;
