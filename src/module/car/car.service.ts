import { Icar } from './car.interface';

import { Car } from "./car.model";


const createCar = async(payload :Icar) : Promise<Icar>=>{
    const result = await Car.create(payload);
    return result
}
const getAllCar = async()=>{
    const result = await Car.find();
    return result
}

export const carServices ={
    createCar,
    getAllCar

}