import { Icar } from './car.interface';

import { Car } from './car.model';

const createCar = async (payload: Icar): Promise<Icar> => {
  const result = await Car.create(payload);
  return result;
};

const getAllCar = async (searchTerm?: string) => {
  if (searchTerm) {
    const searchCar = await Car.find({
        $or:[
            { brand: { $regex: searchTerm, $options: 'i' } },
            { model: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } }
        ]
    });
    return searchCar;
  }
  const result = await Car.find()
  return result
};

const getSingleCar = async (id: string) => {
  const result = await Car.findById(id);
  return result;
};

const updateCar = async (id: string, data: Icar) => {
  const result = await Car.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteCar = async (id: string) => {
  const result = await Car.findByIdAndDelete(id, { new: true });
  return result;
};

export const carServices = {
  createCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
