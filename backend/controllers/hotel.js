const Hotel = require('../models/Hotels');

const getHotels = async () => Hotel.find();

module.exports = {
  getHotels,
};
