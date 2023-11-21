import React, { useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import AddItem from './AddItem';
import Item from './Item';
import dummyData from '../dummyData';
import './AuthenticatedView.css';

const AuthenticatedView = ({ isLoggedIn }) => {
  const [newItem, setNewItem] = useState({ title: '', image: '' });
  const history = useHistory();

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', newItem);
    setNewItem({ title: '', image: '' });
  };

  const handleLogout = () => {
    // Manually set/reset the isLoggedIn variable
    // For a real application, you'd use authentication mechanisms
    setLoggedIn(false);

    // Redirect to the home (root) route
    history.push('/');
  };

  return (
    <div>
      <h2>Authenticated View</h2>
      {dummyData.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <Switch>
        <Route
          path="/authenticated/add-item"
          render={() => (
            <AddItem
              newItem={newItem}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          )}
        />
      </Switch>
      <Link to="/authenticated/add-item">Add New Item</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthenticatedView;
