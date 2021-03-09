const connection = require('./connection');

// Busca todos os resultados do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('motorcycles').find().toArray())
}

module.exports = {
  getAll,
}