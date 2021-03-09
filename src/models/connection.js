const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/BackendApp';
const DB_NAME = 'BackendApp';

const connection = () => MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((conn) => conn.db(DB_NAME))
  .catch((_err) => {
    process.exit();
  });

module.exports = connection; 