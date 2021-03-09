const {
  getAll
} = require('../models/model')

const AllMotorcycles = async () => {
  const motorcycles = await getAll();
  return motorcycles;
};

module.exports = {
  AllMotorcycles
};
