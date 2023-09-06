import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
// import { useRouter } from 'next/router';

interface ClientUserPageProps {
  userData: any;
}

const ClientUserPage: FC<ClientUserPageProps> = ({ userData }) => {

  return (
    <Layout>
      <h1>JSON Pl Client User ID:</h1>
      <div style={{ margin: '0 25%' }}>
        {JSON.stringify(userData, undefined, 4)}
      </div>
    </Layout>
  );
};

async function getServerSideProps() {
  // async function getServerSideProps({ req, res, params, query }) {
  const apiEndPoint = 'https://jsonplaceholder.typicode.com/users/9';

  const data = await fetch(apiEndPoint, {
    method: 'GET',
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
export default ClientUserPage;
