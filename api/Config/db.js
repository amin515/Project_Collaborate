
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const connectmongoDB = async () => {

    try{
      

        let connect = await mongoose.connect(process.env.MONGO_STRING)
        console.log(`MongoDB connect with Host ${connect.connection.host}`.bgCyan.black)
    }catch(error){
        console.log(error)
    }
}
export default connectmongoDB;
//console.log