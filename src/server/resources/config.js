const config = {
  PORT: process.env.PORT_NUMBER || 8080,
  HOST_NAME: 'localhost',
  MONGO_HOST: 'mongodb://127.0.0.1:27017',
};

module.exports = config;
