import {createHotelService,getHotelByIdService} from '../service/hotel.service.js'
export async function createhotelController(req,res){
    const hotelResponse = await createHotelService(req.body);
    // 2. Send the response
    res.status(201).json({
    message: "Hotel created successfully",
    data: hotelResponse,
    success: true,
  })
}

export async function getHotelByIdController(req,res){
    const hotelResponse = await getHotelByIdService(req.params.id);
    // 2. Send the response
    res.status(201).json({
    message: "detail fetched Successfully",
    data: hotelResponse,
    success: true,
  })
}