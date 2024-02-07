import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiPlay1 } from "react-icons/ci";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="closeButton">Close</button>
        <iframe
          title="video"
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal 