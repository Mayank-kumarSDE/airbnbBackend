import dotenv from 'dotenv';

dotenv.config();

const serverConfig = {
  port: process.env.PORT || 3000,
};

export default serverConfig;