import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/YoutubeEmbed.module.scss';

export default function YoutubeEmbed({ embedId }) {
  return (
    <div className={ styles.video_responsive }>
      <iframe
        width="853"
        height="480"
        src={ `https://www.youtube.com/embed/${embedId}` }
        frameBorder="0"
        allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string,
}.isRequired;
