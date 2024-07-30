// SocialIcon.js
import React from 'react';
import 'boxicons/css/boxicons.min.css';

const SocialIcon = ({ link, icon, label }) => {
  return (
    <a href={link} aria-label={label} target="_blank" rel="noopener noreferrer">
      <i className={`bx ${icon}`} />
    </a>
  );
};

export default SocialIcon;
