import { NextApiRequest, NextApiResponse } from 'next'
import { saveToDatabase } from '../../utils/database'
import { ObjectId } from 'mongodb'

export default async function createConversation(req: NextApiRequest, res: NextApiResponse) {
  const {messages} = req.body
  const conversationId= new ObjectId()
  await saveToDatabase(conversationId,messages)
  res.status(200).json({ conversationId : conversationId})
}
