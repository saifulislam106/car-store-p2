import express, { Request, Response } from "express";
import carRouter from "./module/car/car.router";


const app = express();

// middleware
app.use(express.json())


// cars api 
app.use("/api/cars" , carRouter)

app.get("/" , (req :Request , res :Response)=>{
    res.send({
        message: "server is running on broswer"
    })
})

export default app;