import React from 'react';
import "./NotFoundPage.css"

function NotFoundPage() {
  return (
    <div>
        <div className='page-not-found'>
        <div className="video-container">
        <video
          src="/images/137643 (1440p).mp4"
          autoPlay
          controls
          loop
          muted
          className="green-screen-video"
        ></video>
        </div>
            <h1>404 Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>
  );
}

export default NotFoundPage;