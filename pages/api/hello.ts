import type { NextApiRequest, NextApiResponse } from 'next'

// POST /api/hello
export default async function handle(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).send({ message: 'Hello World!' })
}
