import express from 'express'
import { pingController } from '../controller/pingController.js'
const pingRouter = express.Router()
pingRouter.get('/ping',pingController);
export default pingRouter