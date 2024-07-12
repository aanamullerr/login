import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please <Link to="/login">login</Link>.</p>
      )}
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
