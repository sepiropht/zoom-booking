// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'
import { Buffer } from 'buffer'

type Data = {
  accessToken: string
}
const client_secret = 'asUZOm3aRF7lyOWIyUhrA15D1o46qqHl'
const client_id = 'jqJV_mCYTwysBsjkPlegng'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { code } = req.body
  const options = {
    method: 'POST',
    url: 'https://zoom.us/oauth/token',
    qs: {
      grant_type: 'authorization_code',
      //The code below is a sample authorization code. Replace it with your actual authorization code while making requests.
      code,
      //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
      redirect_uri: 'http://localhost:3000/booking',
    },
    headers: {
      /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
       **/
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64'),
    },
  }
  request(options, function (error: any, _, body: any) {
    if (error) throw new Error(error)
    const { accessToken } = body
    res.status(200).json({ accessToken })
  })
}

// pass in your Zoom JWT API Key, Zoom JWT API Secret, Zoom Meeting Number, and 0 to join meeting or webinar or 1 to start meeting
//token 'G-nBzehHRRSj7peeV4_f1g'
