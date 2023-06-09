import { Database } from '@chatbot-ui/core';
// Import the client-side of the database
import { ClientSideDatabase } from '@chatbot-ui/rdbms/client-side';

let database: Database | null = null;

export const getDatabase = async () => {
  if (database) {
    return database;
  } else {
    // Create a new instance of the client-side
    database = new ClientSideDatabase();
    await database.connect();
    return database;
  }
};