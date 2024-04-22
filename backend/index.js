import express, { request } from "express";
import mongoose from "mongoose";
import { PORT,mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoutes  from "./routes/booksRoutes.js"
import cors from 'cors';



const app = express()

//Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


app.get("/",(request,response) => {
    console.log(request);
    return response.status(234).send("Welcome to Luffy D Monkey");
});

//Routes for handle book
app.use('/books',booksRoutes);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })

