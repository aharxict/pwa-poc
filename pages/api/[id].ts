// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const getData = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const apiEndPoint = `https://jsonplaceholder.typicode.com/users/${id}`;

  const data = await fetch(apiEndPoint, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    // body: JSON.stringify({ user: userData }),
  });
  const dataJson = await data.json();

  res.status(200).json(dataJson);
};

export default getData;
