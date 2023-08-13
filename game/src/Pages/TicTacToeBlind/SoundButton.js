import React from 'react';

const SoundButton = ({ playSound, label }) => {
  return (
    <button onClick={playSound}>
      {label}
    </button>
  );
};

export default SoundButton;
