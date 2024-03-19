import React from 'react';
import "./NotFoundPage.css"
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <div className='page-not-found'>
            <h1>404 Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to='/'>
            <button> Go back to homepage </button>
            </Link>
        <div>
            <img src='/images/1_DsPQG5LlsFWCGDcS6c3RnA.gif' className='green-screen-video' alt='zombie'/>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;