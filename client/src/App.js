import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Dashboard from '../src/components/Dashboard'
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [ dispatch]);

  return (
    <Container maxWidth="xl">
      <Dashboard />
 
    </Container>
  );
};

export default App;
