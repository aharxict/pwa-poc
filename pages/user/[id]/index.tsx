import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout/Layout';
import { FC } from 'react';

interface FakeApiUserPageProps {
  userData: any;
}

const FakeApiUserPage: FC<FakeApiUserPageProps> = ({ userData }) => {
  //   const router = useRouter();
  //   const id = router.query.id as string;

  return (
    <Layout>
      <h1>Next Dynamic Api User:</h1>
      <div style={{ margin: '0 25%' }}>
        {JSON.stringify(userData, undefined, 4)}
      </div>
    </Layout>
  );
};

// async function getServerSideProps() {
const getServerSideProps = async (context: NextPageContext) => {
  const { req, query } = context;
  const id = query.id;
  const host = req?.headers?.host;
  const apiEndPoint = `http://${host}/api/${id}`;

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
};

// Next.js currently doesn't serialize data inside of getServerSideProps so this method helps get the job done
function serialization(value: string) {
  return JSON.parse(JSON.stringify(value));
}

export { getServerSideProps };
export default FakeApiUserPage;
