import { NextApiRequest, NextApiResponse } from 'next'
import { getConversationHistory } from '../../utils/database'

export default async function getConversations(req : NextApiRequest, res: NextApiResponse) {

  const { query } = req;

  if (query){
    console.log(query)
  }

  const conversationHistory = await getConversationHistory();
  res.status(200).json({"history" :conversationHistory})
}
