// AuthenticatedView.js
import React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedView = () => {
  return (
    <div>
      <h2>Authenticated View</h2>
      <p>Hello User!</p>

      {/* Link to add a new item (Log Meal) */}      <Link to="/log-meal">
        <button>Add a New Item (Log Meal)</button>
      </Link>

      {/* Link back to the home page */}
      <Link to="/">
        <button>Log Out</button>
      </Link>
    </div>
  );
};

export default AuthenticatedView;
