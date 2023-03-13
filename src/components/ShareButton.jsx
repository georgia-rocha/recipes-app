import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ testId, type = '', id = '' }) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const copyLink = () => {
    const link = window.location.href;

    if (link.includes('/in-progress')) {
      const parsedLink = link.replace('/in-progress', '');
      copy(parsedLink);
    } else if (link.includes('/done-recipes')) {
      const urlType = type === 'meal' ? 'meals' : 'drinks';
      const parsedLink = link.replace('/done-recipes', `/${urlType}/${id}`);
      copy(parsedLink);
    } else {
      copy(link);
    }
    setIsLinkCopied(true);
  };

  return (
    <>
      <button type="button" onClick={ copyLink }>
        <img src={ shareIcon } alt="" data-testid={ testId } />
        <p>Compartilhar</p>
      </button>
      {isLinkCopied && <p>Link copied!</p>}
    </>
  );
}

ShareButton.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
};
