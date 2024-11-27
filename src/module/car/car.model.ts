import { model, Schema } from "mongoose";
import { Icar } from "./car.interface";


const carSchema = new Schema<Icar>({
    brand: {
        type:String,
        required:true
    },
    model:  {
        type:String,
        required:true
    },
    year:  {
        type:Number,
        required:true
    },
    price:  {
        type:Number,
        required:true
    },
    category:  {
        type:String,
        enum: {
            values: ['Sedan' , 'SUV' , 'Truck' , 'Coupe' , 'Convertible'],
            message: '{VALUE} is not valid, please provide a valid category',
          },
        required:true
    },
    description:  {
        type:String
       
    },
    quantity:  {
        type:Number,
        
    },
    inStock:  {
        type:Boolean,
        
    },
})

export const Car = model<Icar>("Car" ,carSchema)