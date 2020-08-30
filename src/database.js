const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let connectedClient = null;

/**
 * A function to get an connected client to MongoDB
 * @returns {*} A MongoDB connected client
 */
const getClient = async () => {
  if (connectedClient === null) {
    try {
      connectedClient = await client.connect();
    } catch (e) {
      console.error('Failed to connect to DB', e);
    }
  }

  return connectedClient;
};

module.exports = {
  getClient
};
