import {createhotelController,getHotelByIdController} from '../controller/hotelcontroller.js'
import { validateRequestBody,validateRequestquery,validateRequestParams } from '../validators/index.js';
import { hotelSchema , hotelIdSchema} from '../validators/hotels.validator.js';
import express from 'express'
const hotelRouter = express.Router();
hotelRouter.post('/',validateRequestBody(hotelSchema),createhotelController)
hotelRouter.get('/:id',getHotelByIdController)
export default hotelRouter