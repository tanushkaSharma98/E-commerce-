import type { NextApiRequest, NextApiResponse } from 'next';

const fakeStoreApiUrl = 'https://fakestoreapi.com/products';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(fakeStoreApiUrl);
    const products = await response.json();
    
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
