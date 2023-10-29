import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectdb from './config/dbconnect.js';
import formRoute from './route/formRoute.js'

//env configuration
dotenv.config();

//database configuration
connectdb();

//rest
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

//routes
app.use("/api/v1/contactcrud", formRoute)

//rest api
app.get("/", (req, res) => {
    res.send("<h1>contact management app</h1>");
  });
//port
const PORT = process.env.PORT||8080;

//port listen
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`.bgCyan.white);
});