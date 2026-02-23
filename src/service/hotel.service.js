import {createHotel,getHotelById} from '../repositories/hotel.repo.js'
export async function createHotelService(hotelData){
    const hotel = await createHotel(hotelData);
    return hotel;
}
export async function getHotelByIdService(id){
    const hotel = await getHotelById(id);
    return hotel;
}
