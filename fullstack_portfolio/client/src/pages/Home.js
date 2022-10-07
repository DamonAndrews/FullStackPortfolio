import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import LandingPage from './LandingPage';

import { QUERY_THOUGHTS } from '../utils/queries';

const styles = {
  card: {
    width: '50%',
    backgroundColor: 'grey',
    fontFamily: 'Times New Roman'
   
}
}
const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
   
       <LandingPage />
    
    
  );
};

export default Home;
