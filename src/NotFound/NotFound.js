import React from 'react';
import error from './error.png';

const NotFound = () => (
  <html>
    <h1>#404: These aren't the pages you're looking for.</h1>
    <img src={error} alt="404"/>
    <p>These aren't the pages you're looking for. You can go about your business. Move along... move along.</p>
  </html> 
);

export default NotFound;
