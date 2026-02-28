// require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
})
import connectDB from "./db/index.js";
import express from "express";

const app = express()




connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log(err);
        })
        app.listen(process.env.PORTS || 7000, () => {
            console.log("Server is running at port: ", process.env.PORTS);
        })
    })
    .catch((err) =>{
        console.log("MONGO DB connection failed !!!", err);
    })


// const app = express()

// ;( async () => {
//     // process.env.PORT
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",  (err) => {
//             throw new Error(err);
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         throw new Error(error);
//     }
// })()