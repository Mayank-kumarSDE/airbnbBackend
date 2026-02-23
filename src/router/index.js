import hotelRouter from './hotelrouter.js'
import express from 'express'
const v1Router = express.Router()

v1Router.use('/hotels',hotelRouter);
export default v1Router;