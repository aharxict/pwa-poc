import React, { FC } from 'react';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = (props) => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default MainPage;
