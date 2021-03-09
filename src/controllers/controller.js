const { Router } = require('express');
const {
  AllMotorcycles
} = require('../services/Service')

const Controller = new Router();

const STATUS_OK = 200;

Controller.get('/', async (_req, res) => {
  const getAllMotorcycles = await AllMotorcycles();
  return res.status(STATUS_OK).json(getAllMotorcycles);
});

module.exports = Controller;