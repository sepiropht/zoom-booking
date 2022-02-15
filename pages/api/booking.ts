// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { accessToken, type, duration, start_time, topic } = req.body

  const options = {
    method: 'POST',
    url: 'https://api.zoom.us/v2/users/me/meeting',
    qs: {
      start_time,
      topic,
      duration,
      type,
    },
  }
  request(options, (error) => {
    if (error) {
      console.log('API Response Error: ', error)
    } else {
      res.status(200)
    }
  }).auth('', '', true, accessToken)
}
