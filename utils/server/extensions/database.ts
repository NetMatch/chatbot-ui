import { NextApiRequest, NextApiResponse } from 'next';
import { ServerDatabase } from '@chatbot-ui/core';
// Import the server-side of the database
import { ServerSideDatabase } from '@chatbot-ui/rdbms/server-side';

export const getServerDatabase = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // Create a new instance of the server-side
  const database: ServerDatabase = new ServerSideDatabase();
  await database.connect();
  return database;
};