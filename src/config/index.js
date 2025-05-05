require('dotenv').config();
const dotenv = require('dotenv');
const connectDB = require('./db');

const envConfig = dotenv.config({ path: `.env` }).parsed;

const config = {
  development: {
    ML_MODEL_PATH: envConfig.ML_MODEL_PATH || '',
    // other development configs
  },
  production: {
    // production specific configs
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];