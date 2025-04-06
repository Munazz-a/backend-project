import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}));
app.use(cookieParser());

app.use(express.json({limit: '10kb'}));
app.use(express.urlencoded({extended : true,
    limit : '16kb'
}))
app.use(express.static('public')); //storing the static files in public folder


//Importing routes
import userRoute from "./routes/user.routes.js";


//Route declaration
app.use("/api/v1/users", userRoute);

//http://localhost:8000/api/v1/users/register

export { app }; //EXPORTING THE APP INSTANCE  
