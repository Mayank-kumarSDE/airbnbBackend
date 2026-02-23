import { Hotel } from '../db/models/index.js';
import logger from '../config/logger.config.js'
export async function createHotel(data){
    const hotel = await Hotel.create({
        name: data.name,
        address: data.address,
        location: data.location,
        rating: data.rating || 0,
        rating_count: data.rating_count || 0,
    })
    logger.info(`Hotel is created ${hotel.id}`)
    return hotel;
}
export async function getHotelById(id){
    const hotel = await Hotel.findByPk(id)
    if(!hotel){
        logger.info(`Hotel not found ${id}`)
        throw new error("hotel not found")
    }
    else{
        logger.info(`hotel found ${id}`)
        return hotel;
    }
}
