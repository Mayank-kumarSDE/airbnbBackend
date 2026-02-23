import express from 'express'
import {serverConfig} from './src/config/index.js'
import pingRouter from './src/router/pingRouter.js'
import genricError from './src/middleware/error.middleware.js';
import logger from './src/config/logger.config.js';
import { attachCorrelationIdMiddleware} from './src/middleware/corelation.middleware.js'
import { sequelize } from './src/db/models/index.js';  // ✅ Add this
import { Hotel } from './src/db/models/index.js'; 
import v1Router from './src/router/index.js';
const app = express();
app.use(express.json());
app.use(attachCorrelationIdMiddleware)
app.use(pingRouter)
app.use(v1Router)
app.use(genricError);


app.listen(serverConfig.port, async () => {
  logger.info(`Server is running on http://localhost:${serverConfig.port}`);
  logger.info(`Press Ctrl+C to stop the server.`);
  await sequelize.authenticate(); // Test the connection to the database
  logger.info('Database connection has been established successfully.');
});