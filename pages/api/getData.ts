// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const getData = (req: NextApiRequest, res: NextApiResponse) => {
  const dummyData = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Morion.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Katie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Homer LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  };

  res.status(200).json(dummyData);
};

export default getData;
