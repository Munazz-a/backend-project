//require('dotenv').config({path: './.env'}); //either w this or using import 


import connectDb from './db/index.js';
import dotnev from 'dotenv';

dotnev.config({path: './.env'}); //while using dotenv through import we need to add experimental flag in package.json

connectDb() //as we are async method, it will return a promise so we can use .then() and .catch() to handle the promise
.then( ()=>{
    app.on("ERROR: ",(error)=>{
        console.log("ERROR is: ",error);
    })

    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running fine on PORT: ${process.env.PORT}`)
    })
} )
.catch((err)=>{
    console.log("Error: ",err)
})







// ANOTHER METHOD || CLEAN METHOD IN DB>INDEX.JS
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
*/ 