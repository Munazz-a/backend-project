import mongoose from "mongoose";
import { DB_NAME} from "../constants.js";

const connectDb = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongoDB connected!! at DB HOST: ${connectionInstance.connection.host}`)//TO KNOW WHRE THE DATABASE IS CONNECTED

    } catch (error) {
        console.log("Connection Error: ",error)
        process.exit(1)
    }
}

export default connectDb; //EXPORTING THE FUNCTION