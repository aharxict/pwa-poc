import React, { FC, useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
// import { useRouter } from 'next/router';

const ClientAjaxUserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const apiEndPoint = 'https://jsonplaceholder.typicode.com/users/1';

      const data = await fetch(apiEndPoint);
      const dataJson = await data.json();
      setUserData(dataJson);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>JSON Pl Client Ajax User:</h1>
      <div style={{ margin: '0 25%' }}>
        {userData ? (
          JSON.stringify(userData, undefined, 4)
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </Layout>
  );
};

export default ClientAjaxUserPage;
