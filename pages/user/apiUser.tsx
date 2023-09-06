import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import { NextPageContext } from 'next';

interface ApiUserPageProps {
  userData: any;
}

const ApiUserPage: FC<ApiUserPageProps> = ({ userData }) => {
  return (
    <Layout>
      <h1>API User:</h1>
      <div style={{ margin: '0 25%' }}>
        {JSON.stringify(userData, undefined, 4)}
      </div>
    </Layout>
  );
};

async function getServerSideProps(context: NextPageContext) {
  const { req } = context;

  const host = req?.headers?.host;
  const apiEndPoint = `http://${host}/api/getData`;

  const data = await fetch(apiEndPoint, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    // body: JSON.stringify({ user: userData }),
  });
  const dataJson = await data.json();

  return {
    props: {
      userData: serialization(dataJson),
    },
  };
}

// Next.js currently doesn't serialize data inside of getServerSideProps so this method helps get the job done
function serialization(value: string) {
  return JSON.parse(JSON.stringify(value));
}

export { getServerSideProps };
export default ApiUserPage;
