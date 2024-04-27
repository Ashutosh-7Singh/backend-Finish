import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MonogDb connected !! DB HOST: ${connectionInstance.connection.host}`);
    // console.log("connectionInstance", connection.host);
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED ", error);
    process.exit(1);
  }
};
export default connectDB;



// import mongoose from "mongoose";
//  import { DB_NAME } from "../constants.js";
//   const connectDB = async()=>{
//     try {
//         const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MonogoDB connected !! DB HOST:${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("MONGODB CONNECTION ERROR:",error)
//         process.exit(1)
//     }
//   }
//   export default connectDB;
