//require('dotenv').config({path: './.env'}); //either w this or using import 


import connectDb from './db/index.js';
import dotnev from 'dotenv';

dotnev.config({path: './.env'}); //while using dotenv through import we need to add experimental flag in package.json

connectDb();








/*
import express from 'express';
const app = express();

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error)
            throw error
        }) // listenor added

        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on PORT: ${process.env.PORT}`)
        }) // server started

    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})(); //CONNECTING MONGOOSE || DATABASE
*/ // ANOTHER METHOD || CLEAN METHOD IN DB>INDEX.JS