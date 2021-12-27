import React from 'react';

// Images
import avatar from '../../assets/avatar.jpg';

function ComponenteAvatar() {
  return (
    <div className="ComponenteAvatar" >
      <img className="ComponenteAvatar__Image" src={avatar} alt="Avatar"/> 
    </div>
  );
}

export default ComponenteAvatar;
